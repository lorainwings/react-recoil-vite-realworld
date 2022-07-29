import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Helmet, HelmetProvider } from "react-helmet-async";

import { MyFeed, GlobalFeed } from "@/components/Feed";
import Tag from "@/components/Tag";
import { loginState, menuState } from "@/store/state";

const Home = () => {
  const login = useRecoilValue(loginState);
  const [toggle, setToggle] = useState(login ? 0 : 1);
  const setMenu = useSetRecoilState(menuState);

  useEffect(() => {
    setMenu(0);
  }, [setMenu]);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Home — Conduit</title>
        </Helmet>
      </HelmetProvider>

      <div className="home-page">
        <div className="banner">
          <div className="container">
            <h1 className="logo-font">conduit</h1>
            <p>A place to share your knowledge.</p>
          </div>
        </div>

        <div className="container page">
          <div className="row">
            <div className="col-md-9">
              <div className="feed-toggle">
                <ul className="nav nav-pills outline-active">
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${toggle === 0 && "active"}`}
                      to="/"
                      onClick={() => setToggle(0)}
                      hidden={!login}
                    >
                      Your Feed
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${toggle === 1 && "active"}`}
                      to="/"
                      onClick={() => setToggle(1)}
                    >
                      Global Feed
                    </Link>
                  </li>
                </ul>
              </div>
              {toggle === 0 ? <MyFeed /> : <GlobalFeed />}
            </div>

            <div className="col-md-3">
              <div className="sidebar">
                <p>Popular Tags</p>

                <div className="tag-list">
                  <Tag name="programming" />
                  <Tag name="javascript" />
                  <Tag name="amberjs" />
                  <Tag name="angularjs" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
