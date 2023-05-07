import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  GlobalCompoDiv,
  GlobalTitleDiv,
  GlobalNewsContainer,
} from "./GlobalCompoStyle";
import { BsGlobe2 } from "react-icons/bs";
import dummyImg from "../../images/dummy-image.jpg";

const global = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        // react에서 env 파일 설정시 REACT_APP_을 붙여주어야 한다.
        const API_KEY = process.env.REACT_APP_API_KEY;
        const GLOBAL_API = `https://newsapi.org/v2/everything?q=global&apiKey=${API_KEY}`;
        const datas = await axios.get(GLOBAL_API);
        const articles = datas.data.articles;

        const filterItem = articles.filter((item) => {
          return item.source.name !== "Google News";
        });
        setData(filterItem);
      } catch (err) {
        console.error(err);
      }
    };

    getData();
  }, []);

  return (
    <GlobalCompoDiv>
      <GlobalTitleDiv>
        <BsGlobe2 id="globalSvg" />
        <p id="globalTitle">Global</p>
        <p id="globalInfoText">
          Click News title, you'll get more information!
        </p>
      </GlobalTitleDiv>
      <GlobalNewsContainer>
        <ul id="globalUl">
          {data.map((item) => {
            const title = item.title;
            const content = item.content;
            const author = item.source.name;
            const image = item.urlToImage;
            const url = item.url;
            const publishDate = item.publishedAt;

            return (
              <li className="globalLi" key={publishDate}>
                <img
                  id="articleImg"
                  src={image ? image : dummyImg}
                  alt="articleImg"
                />
                <p id="articleTitle">
                  <a href={url}>{title}</a>
                </p>
                <div className="authorDiv">
                  <p id="articleAuthor">{author ? author : "anonymous"}</p>
                  <p id="articleDate">{publishDate.slice(0, 10)}</p>
                </div>

                <p id="articleContents">{content}</p>
              </li>
            );
          })}
        </ul>
      </GlobalNewsContainer>
    </GlobalCompoDiv>
  );
};

export default global;
