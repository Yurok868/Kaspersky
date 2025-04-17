import React, { useState } from "react";
import styles from "./oneNews.module.css";
import { SnippetNews } from "../../../entities/news/model/types";
import CountWords from "../countWords/CountWords";

export default function OneNews({
  oneNews,
}: {
  oneNews: SnippetNews;
}): React.JSX.Element {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className={styles.onenews}>
      <div className={styles.column}>
        <div className={styles.upInfo}>
          <div className={styles.flex} style={{ fontSize: "14px" }}>
            <div>
              {new Date(oneNews.DP).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </div>
            <div>
              {Math.round(oneNews.REACH / 1000) + "K "}
              <span className={styles.color}>Reach</span>
            </div>
            <div>
              <span>Top Traffic: </span>
              {oneNews.TRAFFIC.map((topTraffic) => (
                <span key={topTraffic.count}>
                  <span className={styles.color}>{topTraffic.value + " "}</span>
                  <span>{Math.round(topTraffic.count * 100) + "% "}</span>
                </span>
              ))}
            </div>
          </div>
          <div className={styles.flex}>
            <div
              className={`${
                oneNews.SENT === "positiv" ? styles.green : styles.red
              } ${styles.sent}`}
            >
              <div>{oneNews.SENT}</div>
            </div>
            <div className={styles.square} />
            <div className={styles.square} />
          </div>
        </div>
        <div className={styles.title}>{oneNews.TI}</div>
        <div className={styles.urlInfo}>
          <div className={styles.globe} />
          <div className={styles.text}>
            <a
              href={`https://${oneNews.DOM}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.text}
            >
              {oneNews.DOM}
            </a>
          </div>
          <div className={styles.flex1}>
            <div className={styles.france} />
            <div className={styles.color}>{oneNews.CNTR}</div>
          </div>
          <div className={styles.flex1}>
            <div className={styles.language} />
            <div className={styles.color}>{oneNews.CNTR_CODE}</div>
          </div>
          <div className={styles.flex1}>
            <div className={styles.people} />
            <div className={styles.color}>
              {oneNews.AU.length > 0
                ? oneNews.AU.map((au) => <span>{au}</span>)
                : "Unknown"}
            </div>
          </div>
        </div>
        <div
          className={styles.highlights}
          dangerouslySetInnerHTML={{
            __html: showMore
              ? oneNews.HIGHLIGHTS.join("; ")
              : oneNews.HIGHLIGHTS.slice(0, 2).join("; "),
          }}
        />
        {showMore ? (
          <div className={styles.show} onClick={() => setShowMore(!showMore)}>
            Show less &#9650;
          </div>
        ) : (
          <div className={styles.show} onClick={() => setShowMore(!showMore)}>
            Show more &#9660;
          </div>
        )}
        <div className={styles.flex2}>
          {oneNews.KW.map((tag) => (
            <CountWords key={tag.count} count={tag.count} value={tag.value} />
          ))}
        </div>
        <div className={`${styles.original}`}>
          <span>Original Source</span>
        </div>
        <div className={styles.duplicates}>
          <div>
            <span className={styles.color}>Duplicates: </span>
            <span>192</span>
          </div>
          <div>
            <span className={styles.color} style={{ margin: "8px" }}>
              By Relevance
            </span>
            <span>&#9660;</span>
          </div>
        </div>
        <div className={styles.oneDuplicates}>
          <div className={styles.upInfo}>
            <div className={styles.flex} style={{ fontSize: "14px" }}>
              <div className={styles.color}>
                {new Date(oneNews.DP).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </div>
              <div>
                {Math.round(oneNews.REACH / 1000) + "K "}
                <span> Top Reach</span>
              </div>
            </div>
            <div className={styles.flex}>
              <div className={styles.square} />
              <div className={styles.square} />
            </div>
          </div>
          <div className={styles.title}>{oneNews.TI}</div>
          <div className={styles.urlInfo}>
            <div className={styles.globe} />
            <div className={styles.text}>
              <a
                href={`https://${oneNews.DOM}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.text}
              >
                {oneNews.DOM}
              </a>
            </div>
            <div className={styles.flex1}>
              <div className={styles.france} />
              <div className={styles.color}>{oneNews.CNTR}</div>
            </div>
            <div className={styles.flex1}>
              <div className={styles.language} />
              <div className={styles.color}>{oneNews.CNTR_CODE}</div>
            </div>
            <div className={styles.flex1}>
              <div className={styles.people} />
              <div className={styles.color}>
                {oneNews.AU.length > 0
                  ? oneNews.AU.map((au) => <span>{au}</span>)
                  : "Unknown"}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.view}>
          <div>&#9660; View Duplicates</div>
        </div>
      </div>
    </div>
  );
}
