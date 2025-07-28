import type { Language, Server } from "@barp/schale-db-api";

import { useState } from "react";
import { FaBox, FaHome } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { Outlet } from "react-router";

import { Navigator } from "./navigator";

import "./index.less";
import "../../flex.less";

const DEFAULT_SERVER: Server = "jp";
const DEFAULT_LANGUAGE: Language = "cn";

export const Root = () => {
  const [server, setServer] = useState(DEFAULT_SERVER);
  const [language, setLanguage] = useState(DEFAULT_LANGUAGE);

  return (
    <div className="page root">
      <Navigator
        links={[
          {
            to: "/home",
            children: (
              <div className="link">
                <FaHome />
                <span>首页</span>
              </div>
            ),
          },
          {
            to: "/students",
            children: (
              <div className="link">
                <FaUserGroup />
                <span>学生</span>
              </div>
            ),
          },
          {
            to: "/items",
            children: (
              <div className="link">
                <FaBox />
                <span>物品</span>
              </div>
            ),
          },
        ]}
        suffix={
          <div className="row" style={{ alignItems: "center", gap: 8 }}>
            <select value={server}>
              <option value="jp">日服</option>
              <option value="global">国际服</option>
              <option value="cn">国服</option>
            </select>
            <select value={language} onChange={() => {}}>
              <option value="en">English</option>
              <option value="jp">日本語</option>
              <option value="tw">正體中文</option>
              <option value="cn">简体中文</option>
            </select>
            <button type="button">设置</button>
          </div>
        }
      />
      <Outlet />
    </div>
  );
};
