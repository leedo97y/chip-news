import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  BusinessDiv,
  BusinessTitleDiv,
  BusinessNewsContainer,
} from "./BusinessStyle";
import { BsGraphUpArrow } from "react-icons/bs";
import dummyImg from "../../images/dummy-image.jpg";
import Header from "../Header/Header";

const Business = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        // react에서 env 파일 설정시 REACT_APP_을 붙여주어야 한다.
        const API_KEY = process.env.REACT_APP_API_KEY;
        const GLOBAL_API = `https://newsapi.org/v2/everything?q=business&apiKey=${API_KEY}`;
        const datas = await axios.get(GLOBAL_API);
        const articles = datas.data.articles;

        const filterItem = articles.filter((item) => {
          return (
            item.source.name !== "Google News" &&
            item.source.name !== "Business Insider" &&
            item.source.name !== "ReadWrite"
          );
        });
        setData(filterItem);
      } catch (err) {
        console.error(err);
      }
    };

    getData();
  }, []);

  return (
    <>
      <Header />
      <BusinessDiv>
        <BusinessTitleDiv>
          <BsGraphUpArrow id="businessSvg" />
          <div>
            <p id="businessTitle">Business</p>
            <p id="businessInfoText">
              Click News title, you'll get more information!
            </p>
          </div>
        </BusinessTitleDiv>
        <BusinessNewsContainer>
          <ul id="businessUl">
            {data.map((item) => {
              const title = item.title;
              const content = item.content;
              const author = item.source.name;
              const image = item.urlToImage;
              const url = item.url;
              const publishDate = item.publishedAt;

              return (
                <li className="businessLi" key={publishDate}>
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
        </BusinessNewsContainer>
      </BusinessDiv>
    </>
  );
};

export default Business;
