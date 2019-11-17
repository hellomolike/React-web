package com.yfhx.controller;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;

import com.yfhx.Common.CommonResult;
import com.yfhx.VO.TestAcQueryVO;
import com.yfhx.VO.TestAcVO;
import org.apache.commons.io.IOUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.alibaba.fastjson.JSONObject;
import com.google.common.collect.Lists;

import static com.google.common.base.Preconditions.*;

/**
 * 针对testAc表的CRUD操作 <br/>
 * 注意这个类中的所有方法不能抛异常，即使出错也用CommonResult包装下返回错误信息
 *
 * @version 1.0
 * @author chenqingbiao
 */
@Controller
@RequestMapping("/api/testAc")
public class TestAcController {

    private final static Logger logger = LoggerFactory.getLogger(TestAcController.class);



    /**
     * 查询/select
     *
     * @param vo 封装查询条件
     * @return 符合查询条件的记录
     */
    @RequestMapping("select")
    @ResponseBody
    public CommonResult<List<TestAcVO>> select(@RequestBody TestAcQueryVO vo) {
        try {
            checkNotNull(vo);
            List<TestAcVO> result = Lists.newArrayList();

            // TODO: 填写自己的逻辑

            return CommonResult.successReturn(result, 1000);
        } catch (Exception e) {
            logger.error("select error", e);
            return CommonResult.errorReturn(100, "select error");
        }
    }

    /**
     * 新增一条数据/insert <br/>
     *
     * @param vo 要插入的数据
     * @return 完整的数据记录，补充了主键的(如果有主键的话)
     */
    @RequestMapping("insert")
    @ResponseBody
    public CommonResult<TestAcVO> insert(@RequestBody TestAcVO vo) {
        try {
            checkNotNull(vo);

            // TODO: 填写自己的逻辑

            return CommonResult.successReturn(vo);
        } catch (Exception e) {
            logger.error("insert error", e);
            return CommonResult.errorReturn(200, "insert error");
        }
    }

    /**
     * 更新/update <br/>
     * 可以单条更新，也可以批量更新
     *
     * @param keys 要更新的记录，逗号分隔的主键
     * @param vo 要更新哪些字段
     * @return 更新了几条记录
     */
    @RequestMapping("update")
    @ResponseBody
    public CommonResult<Integer> update(@RequestParam("keys") String keys, @RequestBody TestAcVO vo) {
        try {
            checkNotNull(keys);
            checkNotNull(vo);

            // 注意：主键可能是数字，也可能是字符串，要自己处理
            // TODO: 填写自己的逻辑

            return CommonResult.successReturn(100);
        } catch (Exception e) {
            logger.error("update error", e);
            return CommonResult.errorReturn(300, "update error");
        }
    }

    /**
     * 删除/delete <br/>
     * 可以单条删除，也能批量删除
     *
     * @param keys 要删除的记录，逗号分隔的主键
     * @return 删除了几条记录
     */
    @RequestMapping("delete")
    @ResponseBody
    public CommonResult<Integer> delete(@RequestParam("keys") String keys) {
        try {
            checkNotNull(keys);

            // TODO: 填写自己的逻辑

            return CommonResult.successReturn(99);
        } catch (Exception e) {
            logger.error("delete error", e);
            return CommonResult.errorReturn(400, "delete error");
        }
    }

    /**
     * 从某个文件导入数据 <br/>
     * 不限定文件的格式和处理逻辑，需要自己和运营约定
     *
     * @param file
     * @return 返回一个string提示信息，提示信息看运营的需求，一般要包括成功/失败的记录数
     */
    @RequestMapping("import")
    @ResponseBody
    public CommonResult<String> importFile(MultipartFile file) {
        try {
            // 将上传的文件写到一个临时位置，为了防止文件名冲突，加上时间戳
            File tmpFile = new File(System.getProperty("java.io.tmpdir"), System.currentTimeMillis() + file.getOriginalFilename());
            logger.info("import: writing tmp file {}", tmpFile.getAbsolutePath());
            file.transferTo(tmpFile);

            // TODO: 处理tmpFile并导入数据

            // 最后删除这个临时文件
            logger.info("import: delete tmp file {}", tmpFile.getAbsolutePath());
            tmpFile.delete();

            return CommonResult.successReturn("导入成功XX条，导入失败YY条，导入失败的行：1,2,3");
        } catch (Exception e) {
            logger.error("import error", e);
            return CommonResult.errorReturn(500, "import error");
        }
    }

    /**
     * 将符合某个条件的所有记录导出成一个文件 <br/>
     * 同样不限定文件格式和处理逻辑，需要自己和运营约定
     *
     * @param res
     * @param q 其实是queryVO的json，封装查询条件，需要手动反序列化
     * @return
     */
    @RequestMapping(value = "export", produces = MediaType.APPLICATION_OCTET_STREAM_VALUE)
    @ResponseBody
    public void exportFile(HttpServletResponse res, String q) {
        try {
            JSONObject json = JSONObject.parseObject(checkNotNull(q));
            checkArgument(json.size() > 0, "empty query condition");

            // 注意这个方法是查询符合条件的所有记录，忽略vo中的page和pageSize
            TestAcQueryVO vo = JSONObject.parseObject(q, TestAcQueryVO.class);

            String fileName = "export.csv"; // 用户下载得到的文件名，暂时写死
            File tmpFile = new File(System.getProperty("java.io.tmpdir"), System.currentTimeMillis() + fileName);
            logger.info("export: writing tmp file {}", tmpFile.getAbsolutePath());
            // TODO: 根据QueryVO中的条件查询并将结果写入tmpFile

            // 返回下载请求，这段代码不是很优雅，以后要优化下
            res.setHeader("Content-Disposition", "attachment; filename=" + fileName);
            InputStream in = new FileInputStream(tmpFile);
            ServletOutputStream out = res.getOutputStream();
            IOUtils.copy(in, out);
            IOUtils.closeQuietly(in);
            IOUtils.closeQuietly(out);

            // 最后删除临时文件
            logger.info("export: delete tmp file {}", tmpFile.getAbsolutePath());
            tmpFile.delete();
        } catch (Exception e) {
            logger.error("export error", e);
            try {
                res.reset();
                res.setHeader("Content-Type", "text/plain;charset=utf-8");
                ServletOutputStream out = res.getOutputStream();
                out.write("导出失败，请联系管理员。\n".getBytes("utf-8"));
                out.write(("错误信息：" + e.getMessage()).getBytes("utf-8"));
                IOUtils.closeQuietly(out);
            } catch (IOException e1) {
                e1.printStackTrace();
            }
        }
    }

    /**
     * 获取服务端schema
     *
     * @return
     */
    @RequestMapping("schema")
    @ResponseBody
    public CommonResult<JSONObject> getSchema() {
        try {
            JSONObject schema = new JSONObject();

            // TODO: 按自己的需要决定是否更新querySchema和dataSchema，前端会将schema合并后展示
            // schema.put("querySchema", new JSONArray());
            // schema.put("dataSchema", new JSONArray());

            return CommonResult.successReturn(schema);
        } catch (Exception e) {
            logger.error("get schema error", e);
            return CommonResult.errorReturn(600, "get schema error");
        }
    }

}
