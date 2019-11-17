package com.yfhx.VO;

import java.util.Date;
import java.util.List;

import lombok.Data;

/**
 * VO例子
 *
 * @version 1.0
 * @author chenqingbiao
 */
@Data
public class TestAcVO {
    private Long id;
private String name;
private Long weight;
private Long gender;
private String marriage;
private List<Long> interest;
private List<String> good;
private String pic1;
private String desc;
private Long score;
private Double gpa;
private Date birthday;
private Date xxday;

}
