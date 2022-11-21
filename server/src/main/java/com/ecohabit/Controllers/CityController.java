package com.ecohabit.Controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/city")
public class CityController {

    @GetMapping
    public void getCityByPostalCode(){

    }
}
