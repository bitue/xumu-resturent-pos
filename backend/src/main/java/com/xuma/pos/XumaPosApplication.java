package com.xuma.pos;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class XumaPosApplication {
	public static void main(String[] args) {
		SpringApplication.run(XumaPosApplication.class, args);
	}
}
