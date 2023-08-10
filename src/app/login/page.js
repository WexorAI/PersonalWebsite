"use client";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
// import axios from "axios";
import { Button, ColorPicker, Form, Input, message } from "antd";
import React from "react";
import Link from "next/link";
import styles from "./login.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/components/Variants";

function Login() {
  const onfinishHandler = async (values) => {
    try {
      //show loading for spinner
      const res = await axios.post("/api/v1/user/LoginForm", values);
      // window.location.reload();
      //hidelooaging in spenner
      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        message.success("Login Successfully");
        navigate("/");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      message.error("something went wrong");
    }
  };
  return (
    <div className="row">
      <div
        className=" col-lg-3 col-md-5 col-sm-12  "
        style={{ display: "flex", marginTop: "60px", marginBottom: "135px" }}
      >
        <Form name="normal_login" className="login-form container">
          <h4>
            <i>Log in to your account</i>
          </h4>
          <br />
          <div>
            Don't have an account?{" "}
            <Link className="link-info" href="/register">
              SignUp
            </Link>
          </div>
          {/* google integrtion */}
          <div className="google-btn form-outline mb-4">
            {/* onClick={handleClick} this on click option is on the top of the div  */}
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg "
                alt="nooo"
              />
            </div>
            <div className="text-center ">
              <div>
                <p className="btn-text pt-1">
                  <b>Sign Up with google</b>
                </p>
              </div>
            </div>
          </div>
          {/* horizintzil line */}
          <div className="divider d-flex align-items-center my-4">
            <small className="text-center fw-bold mx-3 mb-0 text-muted">
              Or with email and password
            </small>
          </div>

          {/* form input */}
          <div className="form">
            <div className="form-outline mb-4 ">
              <Form.Item
                name="Email"
                label="E-mail"
                rules={[
                  {
                    required: true,
                    message: "Please input your Email!",
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  type="Email"
                  placeholder="Email"
                />
              </Form.Item>
            </div>
            <div className="form-outline mb-4">
              <Form.Item
                name="password"
                label="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="password"
                />
              </Form.Item>{" "}
            </div>
          </div>
          <div className="pt-3 mb-4">
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button btn btn-info btn-md btn-block"
              >
                SignIn
              </Button>
            </Form.Item>
          </div>

          <Form.Item>
            <a className="login-form-forgot" href="/ForgotPassword">
              Forgot password
            </a>
          </Form.Item>
        </Form>
      </div>
      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.15 }}
        style={{ backgroundColor: "#090447" }}
        className=" col-lg-9 col-md-7 col-sm-12 "
      >
        <Image
          src="/ABOUTIMAGE.png"
          alt="Login Image"
          width={1000}
          height={900}
        />
      </motion.div>
    </div>
  );
}
export default Login;
