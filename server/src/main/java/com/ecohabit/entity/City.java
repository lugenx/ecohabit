package com.ecohabit.entity;

import lombok.*;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class City {
    private String postalCode;
    private String city;
    private String province;
    private String metro;
    private String region;
    private double longitude;
    private double latitude;
    private int population;

    public static List<City> testCities(){
        return List.of(
                City.builder().postalCode("A1A").city("St. John's").province("NL").metro("St. John's").region("Atlantic").longitude(-52.95).latitude(47.55).population(100000).build(),
                City.builder().postalCode("A1B").city("Mount Pearl").province("NL").metro("St. John's").region("Atlantic").longitude(-52.85).latitude(47.55).population(100000).build(),
                City.builder().postalCode("A1C").city("Paradise").province("NL").metro("St. John's").region("Atlantic").longitude(-52.75).latitude(47.55).population(100000).build(),
                City.builder().postalCode("A1E").city("Conception Bay South").province("NL").metro("St. John's").region("Atlantic").longitude(-52.85).latitude(47.45).population(100000).build(),
                City.builder().postalCode("A1G").city("Bay Roberts").province("NL").metro("St. John's").region("Atlantic").longitude(-53.15).latitude(47.6).population(100000).build(),
                City.builder().postalCode("A1H").city("Botwood").province("NL").metro("St. John's").region("Atlantic").longitude(-53.2).latitude(48.0).population(100000).build(),
                City.builder().postalCode("A1K").city("Carbonear").province("NL").metro("St. John's").region("Atlantic").longitude(-53.25).latitude(47.7).population(100000).build(),
                City.builder().postalCode("A1L").city("Corner Brook").province("NL").metro("Corner Brook").region("Atlantic").longitude(-57.95).latitude(48.95).population(100000).build(),
                City.builder().postalCode("A1M").city("Gander").province("NL").metro("Gander").region("Atlantic").longitude(-54.6).latitude(48.95).population(100000).build(),
                City.builder().postalCode("A1N").city("Grand Falls-Windsor").province("NL").metro("Grand Falls-Windsor").region("Atlantic").longitude(-55.9).latitude(48.95).population(100000).build());
    }
}
