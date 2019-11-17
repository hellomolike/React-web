package com.yfhx.VO;

import lombok.Data;

/**
 * QueryVO例子
 *
 * @version 1.0
 * @author chenqingbiao
 */
@Data
public class TestActionQueryVO {
    
    private Long id;
private String haha;
private Long type;


    // 这两个要有默认值
    private Integer page = 1;
    private Integer pageSize = 50;
}
