//package com.example.demo.config;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.builders.WebSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.security.web.authentication.AuthenticationFailureHandler;
//import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
//import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
//import org.springframework.security.web.authentication.logout.LogoutSuccessHandler;
//
//@EnableWebSecurity
//public class SecurityConfiguration extends WebSecurityConfigurerAdapter{
//	
//	private static final String[] PUBLIC = new String[] {
//			"/error","/Login","/Logout","/api/test"
//	};
//
//	@Override
//	protected void configure(HttpSecurity http) throws Exception {
//		http.authorizeHttpRequests()
//			.antMatchers(PUBLIC).permitAll()
//			.anyRequest().authenticated()
//			.and()
//		.formLogin()
//			.loginPage("/Login")
//			.and()
//		.csrf().disable();
//		super.configure(http);
//	}
//	 @Override
//	  public void configure(WebSecurity web) {
//	    web.ignoring().antMatchers("/static/**", "/js/**", "/css/**", "/images/**", "/favicon.ico");
//	  }
//
//}
