package com.example.demo.vo;

import java.util.Date;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
public class MemberVO {
	private int mem_no;
	private String mem_email;
	private String mem_name;
	private String mem_pw;
	private int mem_height;
	private int mem_weight;
	private int mem_footsize;
	private Date mem_birth;
	private Date mem_regdate;
	private String mem_resign;
	private String mem_phone;
	private String mem_addr;
	private int mem_point;
	private int auth_code;
}
