package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.stereotype.Service;

import com.example.demo.mapper.TestMapper;
import com.example.demo.vo.MemberVO;

import lombok.RequiredArgsConstructor;

@Service
@Configurable
public class TestServiceImpl implements TestService{
	@Autowired
	private TestMapper testMapper;

	@Override
	public List<MemberVO> getMember() {
		return testMapper.getMember();
	}

}
