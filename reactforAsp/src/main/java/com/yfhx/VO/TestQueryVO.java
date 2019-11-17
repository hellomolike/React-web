package com.yfhx.VO;

import java.util.Date;
import java.util.List;

import lombok.Data;

/**
 * QueryVO例子
 *
 * @author chenqingbiao
 * @version 1.0
 */
@Data
public class TestQueryVO {

    private String name;
    private String blog;
    private Long age;
    private Double weight;
    private Long type;
    private String userType;
    private Long scoreBegin;
    private Long scoreEnd;
    private Double gpaBegin;
    private Double gpaEnd;
    private Double height;
    private List<Long> duoxuan1;
    private List<String> duoxuan2;
    private Long work;
    private List<String> duoxuan3;
    private Date primarySchoolBegin;
    private Date primarySchoolEnd;
    private Date birthdayBegin;
    private Date birthdayEnd;
    private Date xxbirthday;


    // 这两个要有默认值
    private Integer page = 1;
    private Integer pageSize = 50;
}
