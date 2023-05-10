import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  HealthCompoDiv,
  HealthTitleDiv,
  HealthNewsContainer,
} from "./HealthStyle";
import { BsHeartPulse } from "react-icons/bs";
import dummyImg from "../../images/dummy-image.jpg";
import Header from "../Header/Header";

const Health = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getDataHealth = async () => {
      try {
        // react에서 env 파일 설정시 REACT_APP_을 붙여주어야 한다.
        const API_KEY = process.env.REACT_APP_API_KEY;
        const HEALTH_API = `https://newsapi.org/v2/everything?q=health&apiKey=${API_KEY}`;
        const datas = await axios.get(HEALTH_API);
        const articles = datas.data.articles;

        const filterItem = articles.filter((item) => {
          return (
            item.source.name !== "Google News" &&
            item.source.name !== "Business Insider"
          );
        });
        setData(filterItem);
      } catch (err) {
        console.error(err);
      }
    };

    getDataHealth();
  }, []);

  return (
    <>
      <Header />
      <HealthCompoDiv>
        <HealthTitleDiv>
          <BsHeartPulse id="healthSvg" />
          <div id="titlesDiv">
            <p id="healthTitle">Health</p>
            <p id="healthInfoText">
              Click News title, you'll get more information!
            </p>
          </div>
        </HealthTitleDiv>
        <HealthNewsContainer>
          <ul id="healthUl">
            {data.map((item) => {
              const title = item.title;
              const content = item.content;
              const author = item.source.name;
              const image = item.urlToImage;
              const url = item.url;
              const publishDate = item.publishedAt;

              return (
                <li className="healthLi" key={publishDate}>
                  <img
                    id="articleImg"
                    src={!image || image === undefined ? dummyImg : image}
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
        </HealthNewsContainer>
      </HealthCompoDiv>
    </>
  );
};

export default Health;
