package com.yfhx.controller;

import javax.servlet.http.HttpServletResponse;

import com.yfhx.Common.CommonResult;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.IOException;

/**
 * LoginController例子
 *
 * @version 1.0
 * @author chenqingbiao
 */
@Controller
@RequestMapping("/api")
public class LoginController {

    private static final Logger logger = LoggerFactory.getLogger(LoginController.class);

    /**
     * 返回当前登录用户的用户名
     *
     * @return
     */
    @RequestMapping("getCurrentUser")
    @ResponseBody
    public CommonResult<String> getCurrentUser() {
        // TODO: 填写自己的逻辑
        return CommonResult.successReturn("guest");
    }

    /**
     * 校验用户信息，成功则返回当前登录的用户名
     *
     * @return
     */
    @RequestMapping("login")
    @ResponseBody
    public CommonResult<String> login(String username, String password) {
        if (password.equals("guest")){
            logger.info("username = {}", username);

        }
        return CommonResult.successReturn("guest");
    }

    /**
     * 退出登录，一般退出后要重定向到某个页面
     *
     * @return
     */
    @RequestMapping("logout")
    @ResponseBody
    public void logout(HttpServletResponse res) throws IOException {
        res.sendRedirect("http://www.baidu.com");
    }
}
