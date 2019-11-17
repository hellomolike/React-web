package com.yfhx.controller;

import com.yfhx.Common.CommonResult;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

/**
 * UploadController例子
 *
 * @version 1.0
 * @author chenqingbiao
 */
@Controller
@RequestMapping("/api")
public class UploadController {

    private static Logger logger = LoggerFactory.getLogger(UploadController.class);

    /**
     * 上传图片的接口
     *
     * @param file 要上传的图片
     * @return
     */
    @RequestMapping("uploadImage")
    @ResponseBody
    public CommonResult<String> uploadImage(@RequestParam(value = "file", required = true) MultipartFile file) {
        try {
            // TODO: 填写自己的上传逻辑
            // 返回上传后的图片地址
            return CommonResult.successReturn("http://jxy.me/about/avatar.jpg");
        } catch (Exception e) {
            logger.error("uploadImage error ", e);
            return CommonResult.errorReturn("upload image error");
        }
    }

    /**
     * 上传文件的接口
     *
     * @param file 要上传的文件
     * @return
     */
    @RequestMapping("uploadFile")
    @ResponseBody
    public CommonResult<String> uploadFile(@RequestParam(value = "file", required = true) MultipartFile file) {
        try {
            // TODO: 填写自己的上传逻辑
            // 和上传图片非常类似，返回上传后的文件地址
            return CommonResult.successReturn("https://static.googleusercontent.com/media/research.google.com/zh-CN//archive/mapreduce-osdi04.pdf");
        } catch (Exception e) {
            logger.error("uploadFile error ", e);
            return CommonResult.errorReturn("upload file error");
        }
    }
}
