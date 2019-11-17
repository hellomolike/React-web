package com.yfhx.VO;

import java.util.List;

import lombok.Data;

/**
 * VO例子
 *
 * @version 1.0
 * @author chenqingbiao
 */
@Data
public class TestSmsVO {
    private Long id;
private String avatar;
private List<String> photos;
private String jianli;
private List<String> guanshui;
private String url;
private String mail;
private String phoneModel;
private String experience;
private List<String> location;

}
