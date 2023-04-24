import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import logo from "../../components/assets/images/Emart.png";
import { Link } from "react-router-dom";
import { Input, Button, Upload, message } from "antd";
import { CameraOutlined } from "@ant-design/icons";

const Search = ({ CartItem }) => {
  const [searchImageFile, setSearchImageFile] = useState(null);
  const history = useHistory();
  
  // fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search");
    search.classList.toggle("active", window.scrollY > 100);
  });

  // UPLOAD SEARCH IMAGE
  const handleFileChange = (info) => {
    message.success(`${info.file.name} file uploaded successfully.`);
    setSearchImageFile(info.file);
  }

  const handleSearch = () => {
    searchImageFile && history.push('/search-result');
  }

  return (
    <>
      <section className="search">
        <div className="container c_flex">
          <div className="logo width ">
            <img src={logo} alt="" />
          </div>

          <Input.Search
            placeholder="Search"
            enterButton={
              <Button
                type="primary"
                onClick={handleSearch}
                style={{ height: "42px", width: "150px" }}
              >
                Search
              </Button>
            }
            suffix={
              <Upload
                accept=".jpg,.jpeg,.png"
                showUploadList={false}
                beforeUpload={() => false}
                onChange={handleFileChange}
              >
                <Button icon={<CameraOutlined />} />
              </Upload>
            }
            style={{ paddingLeft: "50px", paddingRight: "50px" }}
          />

          <div className="icon f_flex width">
            <i className="fa fa-user icon-circle"></i>
            <div className="cart">
              <Link to="/cart">
                <i className="fa fa-shopping-bag icon-circle"></i>
                <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
