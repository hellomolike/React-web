package com.yfhx.VO;

import java.util.Date;

import lombok.Data;

/**
 * VO例子
 *
 * @version 1.0
 * @author chenqingbiao
 */
@Data
public class TestActionVO {
    private Long id;
private String name;
private String touxiang;
private String desc;
private Long score;
private Double gpa;
private Date birthday;

}
