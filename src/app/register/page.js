"use client";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import { auth, provider } from "../components/config";
// import { signInWithPopup } from "firebase/auth";
// import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { Button, Form, Input, message } from "antd";
import styles from "./register.css";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import axios from "axios";
import Link from "next/link";
import { motion } from "framer-motion";
// import { fadeIn } from "@/app/components/Variants";
import { fadeIn } from "../../app/components/Variants";
import Image from "next/image";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};

function register() {
  // const router = useRouter()
  // const [form] = Form.useForm();
  const onfinishHandler = async (values) => {
    console.log(values);
    try {
      const res = await axios.post("/api/v1/user/RegisterForm", values);
      if (res.data.success) {
        message.success("Register Successfully!");
        usePathname("/login");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      message.error("Something Went Wrong");
    }
  };

  // const [value, setValue] = useState("");
  // console.log(value, "is this the value");
  // const handleClick = () => {
  //   signInWithPopup(auth, provider).then((data) => {
  //     setValue(data.user.email);
  //     localStorage.setItem("email", data.user.email);
  //   });
  // };
  // useEffect(() => {
  //   setValue(localStorage.getItem("email"));
  // }, []);
  return (
    <section>
      <div className="row flex ">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.15 }}
          className=" col-lg-3 hidden lg:flex flex-1 "
          style={{ background: "#090447",paddingTop:"250px"  }}
        >
         
          <p
            className="container mb-8 mx-w-lg mx-auto lg:max-0"
          >
            We are passionate about crafting innovative solutions to bring your
            ideas to life.
          </p>
        </motion.div>
        <div
          className="col-lg-3 col-md-5 col-sm-12"
          style={{ display: "flex", marginTop: "40px", marginBottom: "90px" }}
        >
          <Form
            {...formItemLayout}
            className="container "
            // form={form}
            name="RegisterForm"
            onSubmit={onfinishHandler}
            initialValues={{
              residence: ["zhejiang", "hangzhou", "xihu"],
              prefix: "86",
            }}
            style={{
              maxWidth: 600,
            }}
            scrollToFirstError
          >
            <h4>
              <i>Create your account</i>
            </h4>
            <br />
            <div>
              Have an account?{" "}
              <Link href="/login" className="link-info">
                SignIn
              </Link>
            </div>
            <div className="google-btn form-outline mb-2">
              {/* onClick={handleClick} top of the div */}
              <div className=" google-icon-wrapper">
                <img
                  className="google-icon"
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg "
                  alt="nooo"
                />
              </div>
              <div className="text-center ">
                <div>
                  <p className="btn-text pt-1">
                    <b>Sign In with google</b>
                  </p>
                </div>
              </div>
            </div>
            <div className="divider d-flex align-items-center my-4">
              <small className="text-center fw-bold mx-3 mb-0 text-muted">
                Or with email and password
              </small>
            </div>
            <div className="form">
              <div className="form-outline mb-3 ">
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
              <div className="form-outline mb-3 ">
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
                </Form.Item>
              </div>
              <div className="form-outline mb-3 ">
                <Form.Item
                  name="confirm"
                  label="cnfrm pswd"
                  dependencies={["password"]}
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: "Please confirm your password!",
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("password") === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error(
                            "The new password that you entered do not match!"
                          )
                        );
                      },
                    }),
                  ]}
                >
                  <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="conform Password"
                  />
                </Form.Item>
              </div>
              <div className="form-outline mb-3 ">
                <Form.Item
                  name="name"
                  label="User Name"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}
                >
                  <Input
                    prefix={<UserOutlined className="site-form-item-icon " />}
                    placeholder="Username"
                  />
                </Form.Item>
              </div>
            </div>
            <div className="pt-3 mb-3">
              <Button
                className="btn btn-info btn-md btn-block"
                type="primary"
                htmlType="submit"
              >
                SignUp
              </Button>
            </div>
          </Form>
        </div>
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.15 }}
          style={{ backgroundColor: "#090447" }}
          className="col-lg-6 col-md-7 "
        >
          {/* <Image src="/133.png" alt="Login Image" width={800} height={750} /> */}
          <img src="https://raw.githubusercontent.com/WexorAI/PersonalWebsite/main/public/133.png  " alt="Login Image" width="800" height="750" />
        </motion.div>
      </div>
    </section>
  );
}

export default register;
