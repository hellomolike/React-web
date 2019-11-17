package com.yfhx.VO;

import java.util.List;

import lombok.Data;

/**
 * QueryVO例子
 *
 * @version 1.0
 * @author chenqingbiao
 */
@Data
public class TestSmsQueryVO {
    
    private Long id;
private String content;
private String phoneModel;
private String experience;
private String frequency;
private String isNative;
private List<String> location;


    // 这两个要有默认值
    private Integer page = 1;
    private Integer pageSize = 50;
}
