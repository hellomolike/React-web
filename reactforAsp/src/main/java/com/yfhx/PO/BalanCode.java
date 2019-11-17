package com.yfhx.PO;

import lombok.Data;

import java.io.Serializable;

/**
 * 创建人 ：陈庆彪
 * 创建时间 ：2019-11-12 15:15
 * 功能描述 ：
 */
@Data
public class BalanCode implements Serializable {
    private int code;
    private String data;
    private String message;
    private boolean success;
    private Integer total;

}
