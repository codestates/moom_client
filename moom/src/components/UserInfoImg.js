import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { BASEURL } from "../helpurl";

import axios from "axios";
axios.defaults.withCredentials = true;

// TODO: 수정할 수 있는 데이터 형식에 따른 에러 메세지 확인
class UserInfoImg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: this.props.info,
      fileurl: "",
    };
  }

  handleImgUserEdit = async (event) => {
    let img = event.target.files[0];
    let formData = new FormData();
    formData.append("imgFile", img);
    // 서버에게 업로드 url 생성하는 api 호출
    const res = await axios.post(`${BASEURL}/user/img`, formData);
    // console.log(res.data.location);

    this.setState({
      profile: res.data.location,
      fileurl: res.data.location,
    });
  };

  handleUserEditImg = (e) => {
    let key = e.target.name;
    const { fileurl } = this.state;
    axios
      .put(`${BASEURL}/user/edit`, {
        profile: fileurl,
      })
      .then((res) => {
        // console.log(res.data);
        // 수정 성공하면 인풋창 사라짐
        this.props.closeInput(key);
        // 수정 성공하면 그 유저정보를 다시 가지고 오는 함수
        this.props.handleLoginSuccess();
      })
      // TODO: 다른 상태코드에 따른 분기가 필요
      .catch((err) => {
        console.log(err.message);
      });
  };

  handleUserCancelImg = (e) => {
    let key = e.target.name;
    this.props.closeInput(key);
  };

  render() {
    const { noInfo, what } = this.props;
    const { profile, fileurl } = this.state;
    return (
      <div>
        {profile ? (
          <img className="circle" src={profile} alt="프로필사진" />
        ) : (
          <div>{noInfo}</div>
        )}

        <input
          type="file"
          name="imgFile"
          onChange={this.handleImgUserEdit}
          className="-mr-2 text-gray-900 truncate focus:outline-none"
        ></input>
        <div className="mt-2 flex items-center">
          <button
            className="bg-purple-300 focus:outline-none hover:bg-purple-400 shadow-md p-1 pr-2 rounded-md flex items-center text-center font-medium text-white"
            name={what}
            disabled={fileurl ? false : "disabled"}
            onClick={this.handleUserEditImg}
          >
            <svg
              fill="none"
              className="w-4 text-white mr-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            저장
          </button>

          <button
            name={what}
            className="ml-2 bg-purple-300 focus:outline-none hover:bg-purple-400 shadow-md p-1 pr-2 rounded-md flex items-center text-center font-medium text-white"
            onClick={this.handleUserCancelImg}
          >
            <svg
              fill="none"
              className="w-6 text-white mx-auto"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            취소
          </button>
        </div>
      </div>
    );
  }
}
export default withRouter(UserInfoImg);
