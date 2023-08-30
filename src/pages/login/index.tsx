import React, { useEffect, useRef } from "react";
import { Button, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { ILoginForm } from "@src/service";
import { useLogin } from "@src/core/hook";
import "./index.scss";

function Login() {
  const { loginLoading, login } = useLogin();
  const particles = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (particles.current) {
      window.particlesJS?.(particles.current.id, {
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#ffffff",
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000",
            },
            polygon: {
              nb_sides: 5,
            },
            image: {
              src: "img/github.svg",
              width: 100,
              height: 100,
            },
          },
          opacity: {
            value: 0.2,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 5,
            random: true,
            anim: {
              enable: false,
              speed: 60,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 300,
            color: "#ffffff",
            opacity: 0.1,
            width: 2,
          },
          move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: false,
              mode: "repulse",
            },
            onclick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 800,
              line_linked: {
                opacity: 0.7,
              },
            },
            bubble: {
              distance: 800,
              size: 40,
              duration: 2,
              opacity: 0.5,
              speed: 3,
            },
            repulse: {
              distance: 400,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      });
    }
  }, [particles]);

  const onFinish = (values: ILoginForm) => {
    login(values);
  };

  return (
    <div className="cms-login">
      <div className="cms-login__mask" ref={particles} id="js_particles"></div>
      <div className="cms-login__left">
        <h1>欢迎来到智能大屏后台管理系统</h1>
        <p>您的大屏配置助手，快来体验吧！</p>
      </div>
      <div className="cms-login__right">
        <h2>账户登录</h2>
        <Form
          name="basic"
          wrapperCol={{ span: 24 }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item<ILoginForm>
            label=""
            name="username"
            rules={[{ required: true, message: "请输入用户名" }]}
          >
            <Input
              allowClear
              size="large"
              placeholder="用户名"
              prefix={<UserOutlined className="site-form-item-icon" />}
            />
          </Form.Item>

          <Form.Item<ILoginForm>
            label=""
            name="password"
            rules={[{ required: true, message: "请输入密码" }]}
          >
            <Input.Password
              allowClear
              size="large"
              placeholder="密码"
              prefix={<LockOutlined className="site-form-item-icon" />}
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              size="large"
              loading={loginLoading}
            >
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Login;
