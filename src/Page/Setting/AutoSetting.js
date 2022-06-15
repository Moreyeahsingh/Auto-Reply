import React from "react";

import { IoMdArrowDroprightCircle } from "react-icons/io";
import {
  SettingContainer,
  SettingContant1,
  SettingContant2,
  SettingField,
  SettingField1,
  SettingFieldSleepTimer,
  SettingLabel,
  SettingMainContainer,
  SettingText,
} from "../Style/SettingStyle";

import Switch from "@mui/material/Switch";

// import { TextField } from "@mui/material";
import { TextField } from "../Style/SettingStyle";

const label = { inputProps: { "aria-label": "Switch demo" } };
const AutoSetting = () => {
  return (
    <SettingMainContainer>
      <SettingContainer>
        <SettingField>
          <SettingLabel>AUTO REPLY TRIGGERS</SettingLabel>
          <SettingContant1>
            <div>
              <SettingText>Enable Call Reply</SettingText>
            </div>
            <div>
              <Switch
                {...label}
                defaultChecked
                style={{ color: "red" }}
                color="error"
              />
            </div>
          </SettingContant1>
          <SettingContant1>
            <div>
              <SettingText>Enable SMS Reply</SettingText>
            </div>
            <div>
              <Switch
                {...label}
                defaultChecked
                style={{ color: "red" }}
                color="error"
              />
            </div>
          </SettingContant1>
          <SettingContant1>
            <div>
              <SettingText>Enable MMS Reply</SettingText>
            </div>
            <div>
              <Switch
                {...label}
                defaultChecked
                style={{ color: "red" }}
                color="error"
              />
            </div>
          </SettingContant1>

          <SettingLabel>Delay Response</SettingLabel>
          <SettingContant2>
            <div>
              <SettingText>Delay Response time</SettingText>
            </div>
            <div>
              <TextField style={{ width: "120px" }} placeholder="120sec" />
            </div>
          </SettingContant2>
        </SettingField>
        <SettingField1>
          <SettingFieldSleepTimer>
            <SettingLabel>Sleep Timer</SettingLabel>
            <SettingContant2>
              <div>
                <SettingText>1st Inactive Time</SettingText>
              </div>
              <div>
                <TextField placeholder="7 Mins" />
              </div>
            </SettingContant2>
            <SettingContant2>
              <div>
                <SettingText>Inactive Text</SettingText>
              </div>
              <div>
                <TextField placeholder="Are You Available ?" />
              </div>
            </SettingContant2>
            <SettingContant2>
              <div>
                <SettingText>Disconnection Timer</SettingText>
              </div>
              <div>
                <TextField placeholder="7 Mins" />
              </div>
            </SettingContant2>
            <SettingLabel>Purge</SettingLabel>
            <SettingContant2>
              <div>
                <SettingText>Reactive Users</SettingText>
              </div>
              <div className="Reactive-user">
                <TextField
                  style={{ width: "120px", paddingLeft: "30px" }}
                  placeholder="15 Mins"
                />
                <IoMdArrowDroprightCircle className="arrow-setting" />
              </div>
            </SettingContant2>
          </SettingFieldSleepTimer>
        </SettingField1>
      </SettingContainer>
    </SettingMainContainer>
  );
};

export default AutoSetting;
