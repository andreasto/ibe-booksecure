export const mockedAvailabilityResponse = {
    Flights: [
        {
            FlightNumber: '7317',
            Id: 8289,
            From: {
                Name: 'Cartagena',
                Code: 'CTG'
            },
            To: {
                Name: 'Bogota',
                Code: 'BOG'
            },
            DepartureDateTime: '2017-11-11T06:00:00',
            ArrivalDateTime: '2017-11-11T07:29:00',
            LowestFareId: 51,
            Cabin: '',
            LowestPrice: 155670,
            LowestPriceDiscount: 0,
            Fares: [
                {
                    Discount: 0,
                    FareBasis: 'NPROMD2',
                    Name: 'PROMOCIONALES_EZY',
                    Id: 51,
                    Price: 155670,
                    Code: 'N',
                    Adult: {
                        FareBasis: 'NPROMD2',
                        Id: 51,
                        Price: 77835,
                        Discount: 0,
                        Code: 'N ',
                        PriceWithoutTax: 24231,
                        SeatCount: 14,
                        Taxes: [
                            {
                                Id: 702,
                                Price: 20500,
                                Code: 'CO',
                                Currency: 'COP',
                                Description: 'Airport Tax (Domestic) -CTG-'
                            },
                            {
                                Id: 781,
                                Price: 4604,
                                Code: 'YS',
                                Currency: 'COP',
                                Description: 'YS - Sales Tax (Domestic)'
                            },
                            {
                                Id: 1501,
                                Price: 0,
                                Code: 'M1CD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            },
                            {
                                Id: 1523,
                                Price: 0,
                                Code: 'CAWD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            },
                            {
                                Id: 0,
                                Price: 4550,
                                Code: 'BFEE',
                                Currency: 'COP',
                                Description: 'TARIFA ADMINISTRATIVA WEB'
                            }
                        ]
                    },
                    Child: {
                        FareBasis: 'NPROMD2',
                        Id: 56,
                        Price: 77835,
                        Discount: 0,
                        Code: 'N ',
                        PriceWithoutTax: 24231,
                        SeatCount: 14,
                        Taxes: [
                            {
                                Id: 702,
                                Price: 20500,
                                Code: 'CO',
                                Currency: 'COP',
                                Description: 'Airport Tax (Domestic) -CTG-'
                            },
                            {
                                Id: 781,
                                Price: 4604,
                                Code: 'YS',
                                Currency: 'COP',
                                Description: 'YS - Sales Tax (Domestic)'
                            },
                            {
                                Id: 1501,
                                Price: 0,
                                Code: 'M1CD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            },
                            {
                                Id: 1523,
                                Price: 0,
                                Code: 'CAWD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            },
                            {
                                Id: 0,
                                Price: 4550,
                                Code: 'BFEE',
                                Currency: 'COP',
                                Description: 'TARIFA ADMINISTRATIVA WEB'
                            }
                        ]
                    },
                    Infant: {
                        FareBasis: 'NPROMD2',
                        Id: 52,
                        Price: 0,
                        Discount: 0,
                        Code: 'N ',
                        PriceWithoutTax: 0,
                        SeatCount: 14,
                        Taxes: [
                            {
                                Id: 781,
                                Price: 0,
                                Code: 'YS',
                                Currency: 'COP',
                                Description: 'YS - Sales Tax (Domestic)'
                            },
                            {
                                Id: 1501,
                                Price: 0,
                                Code: 'M1CD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            },
                            {
                                Id: 1523,
                                Price: 0,
                                Code: 'CAWD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            }
                        ]
                    },
                    PriceWithoutTax: 48462,
                    SeatCount: 14,
                    Refundable: false,
                    Taxes: [
                        {
                            Id: 702,
                            Price: 20500,
                            Code: 'CO',
                            Currency: 'COP',
                            Description: 'Airport Tax (Domestic) -CTG-'
                        },
                        {
                            Id: 781,
                            Price: 4604,
                            Code: 'YS',
                            Currency: 'COP',
                            Description: 'YS - Sales Tax (Domestic)'
                        },
                        {
                            Id: 1501,
                            Price: 0,
                            Code: 'M1CD',
                            Currency: 'COP',
                            Description: 'SSR as tax on FBC'
                        },
                        {
                            Id: 1523,
                            Price: 0,
                            Code: 'CAWD',
                            Currency: 'COP',
                            Description: 'SSR as tax on FBC'
                        },
                        {
                            Id: 0,
                            Price: 4550,
                            Code: 'BFEE',
                            Currency: 'COP',
                            Description: 'TARIFA ADMINISTRATIVA WEB'
                        }
                    ],
                    BookingFee: {
                        Id: 0,
                        Price: 23950,
                        Code: 'BFEE',
                        Currency: 'COP',
                        Description: 'TARIFA ADMINISTRATIVA WEB'
                    }
                }
            ],
            Legs: [
                {
                    Id: 7789,
                    DepartureDate: '2017-11-11T06:00:00',
                    ArrivalDate: '2017-11-11T07:29:00',
                    FlightTime: 89,
                    From: 'CTG',
                    To: 'BOG',
                    FlightNumber: '7317'
                }
            ],
            Key: '8289:11/11/2017 6:00:00 AM',
            LowestPriceWithoutTax: 48462,
            FlightTime: 89,
            Soldout: false,
            IsInternational: false,
            IsPlaceHolder: false
        },
        {
            FlightNumber: '7319',
            Id: 8291,
            From: {
                Name: 'Cartagena',
                Code: 'CTG'
            },
            To: {
                Name: 'Bogota',
                Code: 'BOG'
            },
            DepartureDateTime: '2017-11-11T19:37:00',
            ArrivalDateTime: '2017-11-11T21:06:00',
            LowestFareId: 57,
            Cabin: '',
            LowestPrice: 155670,
            LowestPriceDiscount: 0,
            Fares: [
                {
                    Discount: 0,
                    FareBasis: 'NPROMD2',
                    Name: 'PROMOCIONALES_EZY',
                    Id: 57,
                    Price: 155670,
                    Code: 'N',
                    Adult: {
                        FareBasis: 'NPROMD2',
                        Id: 57,
                        Price: 77835,
                        Discount: 0,
                        Code: 'N ',
                        PriceWithoutTax: 24231,
                        SeatCount: 14,
                        Taxes: [
                            {
                                Id: 702,
                                Price: 20500,
                                Code: 'CO',
                                Currency: 'COP',
                                Description: 'Airport Tax (Domestic) -CTG-'
                            },
                            {
                                Id: 781,
                                Price: 4604,
                                Code: 'YS',
                                Currency: 'COP',
                                Description: 'YS - Sales Tax (Domestic)'
                            },
                            {
                                Id: 1501,
                                Price: 0,
                                Code: 'M1CD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            },
                            {
                                Id: 1523,
                                Price: 0,
                                Code: 'CAWD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            },
                            {
                                Id: 0,
                                Price: 4550,
                                Code: 'BFEE',
                                Currency: 'COP',
                                Description: 'TARIFA ADMINISTRATIVA WEB'
                            }
                        ]
                    },
                    Child: {
                        FareBasis: 'NPROMD2',
                        Id: 62,
                        Price: 77835,
                        Discount: 0,
                        Code: 'N ',
                        PriceWithoutTax: 24231,
                        SeatCount: 14,
                        Taxes: [
                            {
                                Id: 702,
                                Price: 20500,
                                Code: 'CO',
                                Currency: 'COP',
                                Description: 'Airport Tax (Domestic) -CTG-'
                            },
                            {
                                Id: 781,
                                Price: 4604,
                                Code: 'YS',
                                Currency: 'COP',
                                Description: 'YS - Sales Tax (Domestic)'
                            },
                            {
                                Id: 1501,
                                Price: 0,
                                Code: 'M1CD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            },
                            {
                                Id: 1523,
                                Price: 0,
                                Code: 'CAWD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            },
                            {
                                Id: 0,
                                Price: 4550,
                                Code: 'BFEE',
                                Currency: 'COP',
                                Description: 'TARIFA ADMINISTRATIVA WEB'
                            }
                        ]
                    },
                    Infant: {
                        FareBasis: 'NPROMD2',
                        Id: 58,
                        Price: 0,
                        Discount: 0,
                        Code: 'N ',
                        PriceWithoutTax: 0,
                        SeatCount: 14,
                        Taxes: [
                            {
                                Id: 781,
                                Price: 0,
                                Code: 'YS',
                                Currency: 'COP',
                                Description: 'YS - Sales Tax (Domestic)'
                            },
                            {
                                Id: 1501,
                                Price: 0,
                                Code: 'M1CD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            },
                            {
                                Id: 1523,
                                Price: 0,
                                Code: 'CAWD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            }
                        ]
                    },
                    PriceWithoutTax: 48462,
                    SeatCount: 14,
                    Refundable: false,
                    Taxes: [
                        {
                            Id: 702,
                            Price: 20500,
                            Code: 'CO',
                            Currency: 'COP',
                            Description: 'Airport Tax (Domestic) -CTG-'
                        },
                        {
                            Id: 781,
                            Price: 4604,
                            Code: 'YS',
                            Currency: 'COP',
                            Description: 'YS - Sales Tax (Domestic)'
                        },
                        {
                            Id: 1501,
                            Price: 0,
                            Code: 'M1CD',
                            Currency: 'COP',
                            Description: 'SSR as tax on FBC'
                        },
                        {
                            Id: 1523,
                            Price: 0,
                            Code: 'CAWD',
                            Currency: 'COP',
                            Description: 'SSR as tax on FBC'
                        },
                        {
                            Id: 0,
                            Price: 4550,
                            Code: 'BFEE',
                            Currency: 'COP',
                            Description: 'TARIFA ADMINISTRATIVA WEB'
                        }
                    ],
                    BookingFee: {
                        Id: 0,
                        Price: 23950,
                        Code: 'BFEE',
                        Currency: 'COP',
                        Description: 'TARIFA ADMINISTRATIVA WEB'
                    }
                }
            ],
            Legs: [
                {
                    Id: 7791,
                    DepartureDate: '2017-11-11T19:37:00',
                    ArrivalDate: '2017-11-11T21:06:00',
                    FlightTime: 89,
                    From: 'CTG',
                    To: 'BOG',
                    FlightNumber: '7319'
                }
            ],
            Key: '8291:11/11/2017 7:37:00 PM',
            LowestPriceWithoutTax: 48462,
            FlightTime: 89,
            Soldout: false,
            IsInternational: false,
            IsPlaceHolder: false
        },
        {
            FlightNumber: '7317',
            Id: 8289,
            From: {
                Name: 'Cartagena',
                Code: 'CTG'
            },
            To: {
                Name: 'Bogota',
                Code: 'BOG'
            },
            DepartureDateTime: '2017-11-12T06:00:00',
            ArrivalDateTime: '2017-11-12T07:29:00',
            LowestFareId: 63,
            Cabin: '',
            LowestPrice: 155670,
            LowestPriceDiscount: 0,
            Fares: [
                {
                    Discount: 0,
                    FareBasis: 'NPROMD2',
                    Name: 'PROMOCIONALES_EZY',
                    Id: 63,
                    Price: 155670,
                    Code: 'N',
                    Adult: {
                        FareBasis: 'NPROMD2',
                        Id: 63,
                        Price: 77835,
                        Discount: 0,
                        Code: 'N ',
                        PriceWithoutTax: 24231,
                        SeatCount: 14,
                        Taxes: [
                            {
                                Id: 702,
                                Price: 20500,
                                Code: 'CO',
                                Currency: 'COP',
                                Description: 'Airport Tax (Domestic) -CTG-'
                            },
                            {
                                Id: 781,
                                Price: 4604,
                                Code: 'YS',
                                Currency: 'COP',
                                Description: 'YS - Sales Tax (Domestic)'
                            },
                            {
                                Id: 1501,
                                Price: 0,
                                Code: 'M1CD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            },
                            {
                                Id: 1523,
                                Price: 0,
                                Code: 'CAWD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            },
                            {
                                Id: 0,
                                Price: 4550,
                                Code: 'BFEE',
                                Currency: 'COP',
                                Description: 'TARIFA ADMINISTRATIVA WEB'
                            }
                        ]
                    },
                    Child: {
                        FareBasis: 'NPROMD2',
                        Id: 68,
                        Price: 77835,
                        Discount: 0,
                        Code: 'N ',
                        PriceWithoutTax: 24231,
                        SeatCount: 14,
                        Taxes: [
                            {
                                Id: 702,
                                Price: 20500,
                                Code: 'CO',
                                Currency: 'COP',
                                Description: 'Airport Tax (Domestic) -CTG-'
                            },
                            {
                                Id: 781,
                                Price: 4604,
                                Code: 'YS',
                                Currency: 'COP',
                                Description: 'YS - Sales Tax (Domestic)'
                            },
                            {
                                Id: 1501,
                                Price: 0,
                                Code: 'M1CD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            },
                            {
                                Id: 1523,
                                Price: 0,
                                Code: 'CAWD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            },
                            {
                                Id: 0,
                                Price: 4550,
                                Code: 'BFEE',
                                Currency: 'COP',
                                Description: 'TARIFA ADMINISTRATIVA WEB'
                            }
                        ]
                    },
                    Infant: {
                        FareBasis: 'NPROMD2',
                        Id: 64,
                        Price: 0,
                        Discount: 0,
                        Code: 'N ',
                        PriceWithoutTax: 0,
                        SeatCount: 14,
                        Taxes: [
                            {
                                Id: 781,
                                Price: 0,
                                Code: 'YS',
                                Currency: 'COP',
                                Description: 'YS - Sales Tax (Domestic)'
                            },
                            {
                                Id: 1501,
                                Price: 0,
                                Code: 'M1CD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            },
                            {
                                Id: 1523,
                                Price: 0,
                                Code: 'CAWD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            }
                        ]
                    },
                    PriceWithoutTax: 48462,
                    SeatCount: 14,
                    Refundable: false,
                    Taxes: [
                        {
                            Id: 702,
                            Price: 20500,
                            Code: 'CO',
                            Currency: 'COP',
                            Description: 'Airport Tax (Domestic) -CTG-'
                        },
                        {
                            Id: 781,
                            Price: 4604,
                            Code: 'YS',
                            Currency: 'COP',
                            Description: 'YS - Sales Tax (Domestic)'
                        },
                        {
                            Id: 1501,
                            Price: 0,
                            Code: 'M1CD',
                            Currency: 'COP',
                            Description: 'SSR as tax on FBC'
                        },
                        {
                            Id: 1523,
                            Price: 0,
                            Code: 'CAWD',
                            Currency: 'COP',
                            Description: 'SSR as tax on FBC'
                        },
                        {
                            Id: 0,
                            Price: 4550,
                            Code: 'BFEE',
                            Currency: 'COP',
                            Description: 'TARIFA ADMINISTRATIVA WEB'
                        }
                    ],
                    BookingFee: {
                        Id: 0,
                        Price: 23950,
                        Code: 'BFEE',
                        Currency: 'COP',
                        Description: 'TARIFA ADMINISTRATIVA WEB'
                    }
                }
            ],
            Legs: [
                {
                    Id: 7789,
                    DepartureDate: '2017-11-12T06:00:00',
                    ArrivalDate: '2017-11-12T07:29:00',
                    FlightTime: 89,
                    From: 'CTG',
                    To: 'BOG',
                    FlightNumber: '7317'
                }
            ],
            Key: '8289:11/12/2017 6:00:00 AM',
            LowestPriceWithoutTax: 48462,
            FlightTime: 89,
            Soldout: false,
            IsInternational: false,
            IsPlaceHolder: false
        },
        {
            FlightNumber: '7319',
            Id: 8291,
            From: {
                Name: 'Cartagena',
                Code: 'CTG'
            },
            To: {
                Name: 'Bogota',
                Code: 'BOG'
            },
            DepartureDateTime: '2017-11-12T19:37:00',
            ArrivalDateTime: '2017-11-12T21:06:00',
            LowestFareId: 69,
            Cabin: '',
            LowestPrice: 155670,
            LowestPriceDiscount: 0,
            Fares: [
                {
                    Discount: 0,
                    FareBasis: 'NPROMD2',
                    Name: 'PROMOCIONALES_EZY',
                    Id: 69,
                    Price: 155670,
                    Code: 'N',
                    Adult: {
                        FareBasis: 'NPROMD2',
                        Id: 69,
                        Price: 77835,
                        Discount: 0,
                        Code: 'N ',
                        PriceWithoutTax: 24231,
                        SeatCount: 14,
                        Taxes: [
                            {
                                Id: 702,
                                Price: 20500,
                                Code: 'CO',
                                Currency: 'COP',
                                Description: 'Airport Tax (Domestic) -CTG-'
                            },
                            {
                                Id: 781,
                                Price: 4604,
                                Code: 'YS',
                                Currency: 'COP',
                                Description: 'YS - Sales Tax (Domestic)'
                            },
                            {
                                Id: 1501,
                                Price: 0,
                                Code: 'M1CD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            },
                            {
                                Id: 1523,
                                Price: 0,
                                Code: 'CAWD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            },
                            {
                                Id: 0,
                                Price: 4550,
                                Code: 'BFEE',
                                Currency: 'COP',
                                Description: 'TARIFA ADMINISTRATIVA WEB'
                            }
                        ]
                    },
                    Child: {
                        FareBasis: 'NPROMD2',
                        Id: 74,
                        Price: 77835,
                        Discount: 0,
                        Code: 'N ',
                        PriceWithoutTax: 24231,
                        SeatCount: 14,
                        Taxes: [
                            {
                                Id: 702,
                                Price: 20500,
                                Code: 'CO',
                                Currency: 'COP',
                                Description: 'Airport Tax (Domestic) -CTG-'
                            },
                            {
                                Id: 781,
                                Price: 4604,
                                Code: 'YS',
                                Currency: 'COP',
                                Description: 'YS - Sales Tax (Domestic)'
                            },
                            {
                                Id: 1501,
                                Price: 0,
                                Code: 'M1CD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            },
                            {
                                Id: 1523,
                                Price: 0,
                                Code: 'CAWD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            },
                            {
                                Id: 0,
                                Price: 4550,
                                Code: 'BFEE',
                                Currency: 'COP',
                                Description: 'TARIFA ADMINISTRATIVA WEB'
                            }
                        ]
                    },
                    Infant: {
                        FareBasis: 'NPROMD2',
                        Id: 70,
                        Price: 0,
                        Discount: 0,
                        Code: 'N ',
                        PriceWithoutTax: 0,
                        SeatCount: 14,
                        Taxes: [
                            {
                                Id: 781,
                                Price: 0,
                                Code: 'YS',
                                Currency: 'COP',
                                Description: 'YS - Sales Tax (Domestic)'
                            },
                            {
                                Id: 1501,
                                Price: 0,
                                Code: 'M1CD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            },
                            {
                                Id: 1523,
                                Price: 0,
                                Code: 'CAWD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            }
                        ]
                    },
                    PriceWithoutTax: 48462,
                    SeatCount: 14,
                    Refundable: false,
                    Taxes: [
                        {
                            Id: 702,
                            Price: 20500,
                            Code: 'CO',
                            Currency: 'COP',
                            Description: 'Airport Tax (Domestic) -CTG-'
                        },
                        {
                            Id: 781,
                            Price: 4604,
                            Code: 'YS',
                            Currency: 'COP',
                            Description: 'YS - Sales Tax (Domestic)'
                        },
                        {
                            Id: 1501,
                            Price: 0,
                            Code: 'M1CD',
                            Currency: 'COP',
                            Description: 'SSR as tax on FBC'
                        },
                        {
                            Id: 1523,
                            Price: 0,
                            Code: 'CAWD',
                            Currency: 'COP',
                            Description: 'SSR as tax on FBC'
                        },
                        {
                            Id: 0,
                            Price: 4550,
                            Code: 'BFEE',
                            Currency: 'COP',
                            Description: 'TARIFA ADMINISTRATIVA WEB'
                        }
                    ],
                    BookingFee: {
                        Id: 0,
                        Price: 23950,
                        Code: 'BFEE',
                        Currency: 'COP',
                        Description: 'TARIFA ADMINISTRATIVA WEB'
                    }
                }
            ],
            Legs: [
                {
                    Id: 7791,
                    DepartureDate: '2017-11-12T19:37:00',
                    ArrivalDate: '2017-11-12T21:06:00',
                    FlightTime: 89,
                    From: 'CTG',
                    To: 'BOG',
                    FlightNumber: '7319'
                }
            ],
            Key: '8291:11/12/2017 7:37:00 PM',
            LowestPriceWithoutTax: 48462,
            FlightTime: 89,
            Soldout: false,
            IsInternational: false,
            IsPlaceHolder: false
        },
        {
            FlightNumber: '7317',
            Id: 8289,
            From: {
                Name: 'Cartagena',
                Code: 'CTG'
            },
            To: {
                Name: 'Bogota',
                Code: 'BOG'
            },
            DepartureDateTime: '2017-11-13T06:00:00',
            ArrivalDateTime: '2017-11-13T07:29:00',
            LowestFareId: 75,
            Cabin: '',
            LowestPrice: 155670,
            LowestPriceDiscount: 0,
            Fares: [
                {
                    Discount: 0,
                    FareBasis: 'NPROMD2',
                    Name: 'PROMOCIONALES_EZY',
                    Id: 75,
                    Price: 155670,
                    Code: 'N',
                    Adult: {
                        FareBasis: 'NPROMD2',
                        Id: 75,
                        Price: 77835,
                        Discount: 0,
                        Code: 'N ',
                        PriceWithoutTax: 24231,
                        SeatCount: 14,
                        Taxes: [
                            {
                                Id: 702,
                                Price: 20500,
                                Code: 'CO',
                                Currency: 'COP',
                                Description: 'Airport Tax (Domestic) -CTG-'
                            },
                            {
                                Id: 781,
                                Price: 4604,
                                Code: 'YS',
                                Currency: 'COP',
                                Description: 'YS - Sales Tax (Domestic)'
                            },
                            {
                                Id: 1501,
                                Price: 0,
                                Code: 'M1CD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            },
                            {
                                Id: 1523,
                                Price: 0,
                                Code: 'CAWD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            },
                            {
                                Id: 0,
                                Price: 4550,
                                Code: 'BFEE',
                                Currency: 'COP',
                                Description: 'TARIFA ADMINISTRATIVA WEB'
                            }
                        ]
                    },
                    Child: {
                        FareBasis: 'NPROMD2',
                        Id: 80,
                        Price: 77835,
                        Discount: 0,
                        Code: 'N ',
                        PriceWithoutTax: 24231,
                        SeatCount: 14,
                        Taxes: [
                            {
                                Id: 702,
                                Price: 20500,
                                Code: 'CO',
                                Currency: 'COP',
                                Description: 'Airport Tax (Domestic) -CTG-'
                            },
                            {
                                Id: 781,
                                Price: 4604,
                                Code: 'YS',
                                Currency: 'COP',
                                Description: 'YS - Sales Tax (Domestic)'
                            },
                            {
                                Id: 1501,
                                Price: 0,
                                Code: 'M1CD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            },
                            {
                                Id: 1523,
                                Price: 0,
                                Code: 'CAWD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            },
                            {
                                Id: 0,
                                Price: 4550,
                                Code: 'BFEE',
                                Currency: 'COP',
                                Description: 'TARIFA ADMINISTRATIVA WEB'
                            }
                        ]
                    },
                    Infant: {
                        FareBasis: 'NPROMD2',
                        Id: 76,
                        Price: 0,
                        Discount: 0,
                        Code: 'N ',
                        PriceWithoutTax: 0,
                        SeatCount: 14,
                        Taxes: [
                            {
                                Id: 781,
                                Price: 0,
                                Code: 'YS',
                                Currency: 'COP',
                                Description: 'YS - Sales Tax (Domestic)'
                            },
                            {
                                Id: 1501,
                                Price: 0,
                                Code: 'M1CD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            },
                            {
                                Id: 1523,
                                Price: 0,
                                Code: 'CAWD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            }
                        ]
                    },
                    PriceWithoutTax: 48462,
                    SeatCount: 14,
                    Refundable: false,
                    Taxes: [
                        {
                            Id: 702,
                            Price: 20500,
                            Code: 'CO',
                            Currency: 'COP',
                            Description: 'Airport Tax (Domestic) -CTG-'
                        },
                        {
                            Id: 781,
                            Price: 4604,
                            Code: 'YS',
                            Currency: 'COP',
                            Description: 'YS - Sales Tax (Domestic)'
                        },
                        {
                            Id: 1501,
                            Price: 0,
                            Code: 'M1CD',
                            Currency: 'COP',
                            Description: 'SSR as tax on FBC'
                        },
                        {
                            Id: 1523,
                            Price: 0,
                            Code: 'CAWD',
                            Currency: 'COP',
                            Description: 'SSR as tax on FBC'
                        },
                        {
                            Id: 0,
                            Price: 4550,
                            Code: 'BFEE',
                            Currency: 'COP',
                            Description: 'TARIFA ADMINISTRATIVA WEB'
                        }
                    ],
                    BookingFee: {
                        Id: 0,
                        Price: 23950,
                        Code: 'BFEE',
                        Currency: 'COP',
                        Description: 'TARIFA ADMINISTRATIVA WEB'
                    }
                }
            ],
            Legs: [
                {
                    Id: 7789,
                    DepartureDate: '2017-11-13T06:00:00',
                    ArrivalDate: '2017-11-13T07:29:00',
                    FlightTime: 89,
                    From: 'CTG',
                    To: 'BOG',
                    FlightNumber: '7317'
                }
            ],
            Key: '8289:11/13/2017 6:00:00 AM',
            LowestPriceWithoutTax: 48462,
            FlightTime: 89,
            Soldout: false,
            IsInternational: false,
            IsPlaceHolder: false
        },
        {
            FlightNumber: '7319',
            Id: 8291,
            From: {
                Name: 'Cartagena',
                Code: 'CTG'
            },
            To: {
                Name: 'Bogota',
                Code: 'BOG'
            },
            DepartureDateTime: '2017-11-13T19:37:00',
            ArrivalDateTime: '2017-11-13T21:06:00',
            LowestFareId: 81,
            Cabin: '',
            LowestPrice: 155670,
            LowestPriceDiscount: 0,
            Fares: [
                {
                    Discount: 0,
                    FareBasis: 'NPROMD2',
                    Name: 'PROMOCIONALES_EZY',
                    Id: 81,
                    Price: 155670,
                    Code: 'N',
                    Adult: {
                        FareBasis: 'NPROMD2',
                        Id: 81,
                        Price: 77835,
                        Discount: 0,
                        Code: 'N ',
                        PriceWithoutTax: 24231,
                        SeatCount: 14,
                        Taxes: [
                            {
                                Id: 702,
                                Price: 20500,
                                Code: 'CO',
                                Currency: 'COP',
                                Description: 'Airport Tax (Domestic) -CTG-'
                            },
                            {
                                Id: 781,
                                Price: 4604,
                                Code: 'YS',
                                Currency: 'COP',
                                Description: 'YS - Sales Tax (Domestic)'
                            },
                            {
                                Id: 1501,
                                Price: 0,
                                Code: 'M1CD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            },
                            {
                                Id: 1523,
                                Price: 0,
                                Code: 'CAWD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            },
                            {
                                Id: 0,
                                Price: 4550,
                                Code: 'BFEE',
                                Currency: 'COP',
                                Description: 'TARIFA ADMINISTRATIVA WEB'
                            }
                        ]
                    },
                    Child: {
                        FareBasis: 'NPROMD2',
                        Id: 86,
                        Price: 77835,
                        Discount: 0,
                        Code: 'N ',
                        PriceWithoutTax: 24231,
                        SeatCount: 14,
                        Taxes: [
                            {
                                Id: 702,
                                Price: 20500,
                                Code: 'CO',
                                Currency: 'COP',
                                Description: 'Airport Tax (Domestic) -CTG-'
                            },
                            {
                                Id: 781,
                                Price: 4604,
                                Code: 'YS',
                                Currency: 'COP',
                                Description: 'YS - Sales Tax (Domestic)'
                            },
                            {
                                Id: 1501,
                                Price: 0,
                                Code: 'M1CD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            },
                            {
                                Id: 1523,
                                Price: 0,
                                Code: 'CAWD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            },
                            {
                                Id: 0,
                                Price: 4550,
                                Code: 'BFEE',
                                Currency: 'COP',
                                Description: 'TARIFA ADMINISTRATIVA WEB'
                            }
                        ]
                    },
                    Infant: {
                        FareBasis: 'NPROMD2',
                        Id: 82,
                        Price: 0,
                        Discount: 0,
                        Code: 'N ',
                        PriceWithoutTax: 0,
                        SeatCount: 14,
                        Taxes: [
                            {
                                Id: 781,
                                Price: 0,
                                Code: 'YS',
                                Currency: 'COP',
                                Description: 'YS - Sales Tax (Domestic)'
                            },
                            {
                                Id: 1501,
                                Price: 0,
                                Code: 'M1CD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            },
                            {
                                Id: 1523,
                                Price: 0,
                                Code: 'CAWD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            }
                        ]
                    },
                    PriceWithoutTax: 48462,
                    SeatCount: 14,
                    Refundable: false,
                    Taxes: [
                        {
                            Id: 702,
                            Price: 20500,
                            Code: 'CO',
                            Currency: 'COP',
                            Description: 'Airport Tax (Domestic) -CTG-'
                        },
                        {
                            Id: 781,
                            Price: 4604,
                            Code: 'YS',
                            Currency: 'COP',
                            Description: 'YS - Sales Tax (Domestic)'
                        },
                        {
                            Id: 1501,
                            Price: 0,
                            Code: 'M1CD',
                            Currency: 'COP',
                            Description: 'SSR as tax on FBC'
                        },
                        {
                            Id: 1523,
                            Price: 0,
                            Code: 'CAWD',
                            Currency: 'COP',
                            Description: 'SSR as tax on FBC'
                        },
                        {
                            Id: 0,
                            Price: 4550,
                            Code: 'BFEE',
                            Currency: 'COP',
                            Description: 'TARIFA ADMINISTRATIVA WEB'
                        }
                    ],
                    BookingFee: {
                        Id: 0,
                        Price: 23950,
                        Code: 'BFEE',
                        Currency: 'COP',
                        Description: 'TARIFA ADMINISTRATIVA WEB'
                    }
                }
            ],
            Legs: [
                {
                    Id: 7791,
                    DepartureDate: '2017-11-13T19:37:00',
                    ArrivalDate: '2017-11-13T21:06:00',
                    FlightTime: 89,
                    From: 'CTG',
                    To: 'BOG',
                    FlightNumber: '7319'
                }
            ],
            Key: '8291:11/13/2017 7:37:00 PM',
            LowestPriceWithoutTax: 48462,
            FlightTime: 89,
            Soldout: false,
            IsInternational: false,
            IsPlaceHolder: false
        },
        {
            FlightNumber: '7317',
            Id: 8289,
            From: {
                Name: 'Cartagena',
                Code: 'CTG'
            },
            To: {
                Name: 'Bogota',
                Code: 'BOG'
            },
            DepartureDateTime: '2017-11-14T06:00:00',
            ArrivalDateTime: '2017-11-14T07:29:00',
            LowestFareId: 87,
            Cabin: '',
            LowestPrice: 155670,
            LowestPriceDiscount: 0,
            Fares: [
                {
                    Discount: 0,
                    FareBasis: 'NPROMD2',
                    Name: 'PROMOCIONALES_EZY',
                    Id: 87,
                    Price: 155670,
                    Code: 'N',
                    Adult: {
                        FareBasis: 'NPROMD2',
                        Id: 87,
                        Price: 77835,
                        Discount: 0,
                        Code: 'N ',
                        PriceWithoutTax: 24231,
                        SeatCount: 14,
                        Taxes: [
                            {
                                Id: 702,
                                Price: 20500,
                                Code: 'CO',
                                Currency: 'COP',
                                Description: 'Airport Tax (Domestic) -CTG-'
                            },
                            {
                                Id: 781,
                                Price: 4604,
                                Code: 'YS',
                                Currency: 'COP',
                                Description: 'YS - Sales Tax (Domestic)'
                            },
                            {
                                Id: 1501,
                                Price: 0,
                                Code: 'M1CD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            },
                            {
                                Id: 1523,
                                Price: 0,
                                Code: 'CAWD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            },
                            {
                                Id: 0,
                                Price: 4550,
                                Code: 'BFEE',
                                Currency: 'COP',
                                Description: 'TARIFA ADMINISTRATIVA WEB'
                            }
                        ]
                    },
                    Child: {
                        FareBasis: 'NPROMD2',
                        Id: 92,
                        Price: 77835,
                        Discount: 0,
                        Code: 'N ',
                        PriceWithoutTax: 24231,
                        SeatCount: 14,
                        Taxes: [
                            {
                                Id: 702,
                                Price: 20500,
                                Code: 'CO',
                                Currency: 'COP',
                                Description: 'Airport Tax (Domestic) -CTG-'
                            },
                            {
                                Id: 781,
                                Price: 4604,
                                Code: 'YS',
                                Currency: 'COP',
                                Description: 'YS - Sales Tax (Domestic)'
                            },
                            {
                                Id: 1501,
                                Price: 0,
                                Code: 'M1CD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            },
                            {
                                Id: 1523,
                                Price: 0,
                                Code: 'CAWD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            },
                            {
                                Id: 0,
                                Price: 4550,
                                Code: 'BFEE',
                                Currency: 'COP',
                                Description: 'TARIFA ADMINISTRATIVA WEB'
                            }
                        ]
                    },
                    Infant: {
                        FareBasis: 'NPROMD2',
                        Id: 88,
                        Price: 0,
                        Discount: 0,
                        Code: 'N ',
                        PriceWithoutTax: 0,
                        SeatCount: 14,
                        Taxes: [
                            {
                                Id: 781,
                                Price: 0,
                                Code: 'YS',
                                Currency: 'COP',
                                Description: 'YS - Sales Tax (Domestic)'
                            },
                            {
                                Id: 1501,
                                Price: 0,
                                Code: 'M1CD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            },
                            {
                                Id: 1523,
                                Price: 0,
                                Code: 'CAWD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            }
                        ]
                    },
                    PriceWithoutTax: 48462,
                    SeatCount: 14,
                    Refundable: false,
                    Taxes: [
                        {
                            Id: 702,
                            Price: 20500,
                            Code: 'CO',
                            Currency: 'COP',
                            Description: 'Airport Tax (Domestic) -CTG-'
                        },
                        {
                            Id: 781,
                            Price: 4604,
                            Code: 'YS',
                            Currency: 'COP',
                            Description: 'YS - Sales Tax (Domestic)'
                        },
                        {
                            Id: 1501,
                            Price: 0,
                            Code: 'M1CD',
                            Currency: 'COP',
                            Description: 'SSR as tax on FBC'
                        },
                        {
                            Id: 1523,
                            Price: 0,
                            Code: 'CAWD',
                            Currency: 'COP',
                            Description: 'SSR as tax on FBC'
                        },
                        {
                            Id: 0,
                            Price: 4550,
                            Code: 'BFEE',
                            Currency: 'COP',
                            Description: 'TARIFA ADMINISTRATIVA WEB'
                        }
                    ],
                    BookingFee: {
                        Id: 0,
                        Price: 23950,
                        Code: 'BFEE',
                        Currency: 'COP',
                        Description: 'TARIFA ADMINISTRATIVA WEB'
                    }
                }
            ],
            Legs: [
                {
                    Id: 7789,
                    DepartureDate: '2017-11-14T06:00:00',
                    ArrivalDate: '2017-11-14T07:29:00',
                    FlightTime: 89,
                    From: 'CTG',
                    To: 'BOG',
                    FlightNumber: '7317'
                }
            ],
            Key: '8289:11/14/2017 6:00:00 AM',
            LowestPriceWithoutTax: 48462,
            FlightTime: 89,
            Soldout: false,
            IsInternational: false,
            IsPlaceHolder: false
        },
        {
            FlightNumber: '7319',
            Id: 8291,
            From: {
                Name: 'Cartagena',
                Code: 'CTG'
            },
            To: {
                Name: 'Bogota',
                Code: 'BOG'
            },
            DepartureDateTime: '2017-11-14T19:37:00',
            ArrivalDateTime: '2017-11-14T21:06:00',
            LowestFareId: 93,
            Cabin: '',
            LowestPrice: 155670,
            LowestPriceDiscount: 0,
            Fares: [
                {
                    Discount: 0,
                    FareBasis: 'NPROMD2',
                    Name: 'PROMOCIONALES_EZY',
                    Id: 93,
                    Price: 155670,
                    Code: 'N',
                    Adult: {
                        FareBasis: 'NPROMD2',
                        Id: 93,
                        Price: 77835,
                        Discount: 0,
                        Code: 'N ',
                        PriceWithoutTax: 24231,
                        SeatCount: 14,
                        Taxes: [
                            {
                                Id: 702,
                                Price: 20500,
                                Code: 'CO',
                                Currency: 'COP',
                                Description: 'Airport Tax (Domestic) -CTG-'
                            },
                            {
                                Id: 781,
                                Price: 4604,
                                Code: 'YS',
                                Currency: 'COP',
                                Description: 'YS - Sales Tax (Domestic)'
                            },
                            {
                                Id: 1501,
                                Price: 0,
                                Code: 'M1CD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            },
                            {
                                Id: 1523,
                                Price: 0,
                                Code: 'CAWD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            },
                            {
                                Id: 0,
                                Price: 4550,
                                Code: 'BFEE',
                                Currency: 'COP',
                                Description: 'TARIFA ADMINISTRATIVA WEB'
                            }
                        ]
                    },
                    Child: {
                        FareBasis: 'NPROMD2',
                        Id: 98,
                        Price: 77835,
                        Discount: 0,
                        Code: 'N ',
                        PriceWithoutTax: 24231,
                        SeatCount: 14,
                        Taxes: [
                            {
                                Id: 702,
                                Price: 20500,
                                Code: 'CO',
                                Currency: 'COP',
                                Description: 'Airport Tax (Domestic) -CTG-'
                            },
                            {
                                Id: 781,
                                Price: 4604,
                                Code: 'YS',
                                Currency: 'COP',
                                Description: 'YS - Sales Tax (Domestic)'
                            },
                            {
                                Id: 1501,
                                Price: 0,
                                Code: 'M1CD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            },
                            {
                                Id: 1523,
                                Price: 0,
                                Code: 'CAWD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            },
                            {
                                Id: 0,
                                Price: 4550,
                                Code: 'BFEE',
                                Currency: 'COP',
                                Description: 'TARIFA ADMINISTRATIVA WEB'
                            }
                        ]
                    },
                    Infant: {
                        FareBasis: 'NPROMD2',
                        Id: 94,
                        Price: 0,
                        Discount: 0,
                        Code: 'N ',
                        PriceWithoutTax: 0,
                        SeatCount: 14,
                        Taxes: [
                            {
                                Id: 781,
                                Price: 0,
                                Code: 'YS',
                                Currency: 'COP',
                                Description: 'YS - Sales Tax (Domestic)'
                            },
                            {
                                Id: 1501,
                                Price: 0,
                                Code: 'M1CD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            },
                            {
                                Id: 1523,
                                Price: 0,
                                Code: 'CAWD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            }
                        ]
                    },
                    PriceWithoutTax: 48462,
                    SeatCount: 14,
                    Refundable: false,
                    Taxes: [
                        {
                            Id: 702,
                            Price: 20500,
                            Code: 'CO',
                            Currency: 'COP',
                            Description: 'Airport Tax (Domestic) -CTG-'
                        },
                        {
                            Id: 781,
                            Price: 4604,
                            Code: 'YS',
                            Currency: 'COP',
                            Description: 'YS - Sales Tax (Domestic)'
                        },
                        {
                            Id: 1501,
                            Price: 0,
                            Code: 'M1CD',
                            Currency: 'COP',
                            Description: 'SSR as tax on FBC'
                        },
                        {
                            Id: 1523,
                            Price: 0,
                            Code: 'CAWD',
                            Currency: 'COP',
                            Description: 'SSR as tax on FBC'
                        },
                        {
                            Id: 0,
                            Price: 4550,
                            Code: 'BFEE',
                            Currency: 'COP',
                            Description: 'TARIFA ADMINISTRATIVA WEB'
                        }
                    ],
                    BookingFee: {
                        Id: 0,
                        Price: 23950,
                        Code: 'BFEE',
                        Currency: 'COP',
                        Description: 'TARIFA ADMINISTRATIVA WEB'
                    }
                }
            ],
            Legs: [
                {
                    Id: 7791,
                    DepartureDate: '2017-11-14T19:37:00',
                    ArrivalDate: '2017-11-14T21:06:00',
                    FlightTime: 89,
                    From: 'CTG',
                    To: 'BOG',
                    FlightNumber: '7319'
                }
            ],
            Key: '8291:11/14/2017 7:37:00 PM',
            LowestPriceWithoutTax: 48462,
            FlightTime: 89,
            Soldout: false,
            IsInternational: false,
            IsPlaceHolder: false
        },
        {
            FlightNumber: '7316',
            Id: 8288,
            From: {
                Name: 'Bogota',
                Code: 'BOG'
            },
            To: {
                Name: 'Cartagena',
                Code: 'CTG'
            },
            DepartureDateTime: '2017-11-01T07:59:00',
            ArrivalDateTime: '2017-11-01T09:31:00',
            LowestFareId: 1,
            Cabin: '',
            LowestPrice: 116836,
            LowestPriceDiscount: 0,
            Fares: [
                {
                    Discount: 0,
                    FareBasis: 'NPROMD1',
                    Name: 'PROMOCIONALES_EZY',
                    Id: 1,
                    Price: 116836,
                    Code: 'N',
                    Adult: {
                        FareBasis: 'NPROMD1',
                        Id: 1,
                        Price: 58418,
                        Discount: 0,
                        Code: 'N ',
                        PriceWithoutTax: 26654,
                        SeatCount: 14,
                        Taxes: [
                            {
                                Id: 646,
                                Price: 14800,
                                Code: 'CO',
                                Currency: 'COP',
                                Description: 'Airport Tax (Domestic) -BOG-'
                            },
                            {
                                Id: 781,
                                Price: 5064,
                                Code: 'YS',
                                Currency: 'COP',
                                Description: 'YS - Sales Tax (Domestic)'
                            },
                            {
                                Id: 1501,
                                Price: 0,
                                Code: 'M1CD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            },
                            {
                                Id: 1523,
                                Price: 0,
                                Code: 'CAWD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            },
                            {
                                Id: 0,
                                Price: 1900,
                                Code: 'BFEE',
                                Currency: 'COP',
                                Description: 'TARIFA ADMINISTRATIVA WEB'
                            }
                        ]
                    },
                    Child: {
                        FareBasis: 'NPROMD1',
                        Id: 5,
                        Price: 58418,
                        Discount: 0,
                        Code: 'N ',
                        PriceWithoutTax: 26654,
                        SeatCount: 14,
                        Taxes: [
                            {
                                Id: 646,
                                Price: 14800,
                                Code: 'CO',
                                Currency: 'COP',
                                Description: 'Airport Tax (Domestic) -BOG-'
                            },
                            {
                                Id: 781,
                                Price: 5064,
                                Code: 'YS',
                                Currency: 'COP',
                                Description: 'YS - Sales Tax (Domestic)'
                            },
                            {
                                Id: 1501,
                                Price: 0,
                                Code: 'M1CD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            },
                            {
                                Id: 1523,
                                Price: 0,
                                Code: 'CAWD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            },
                            {
                                Id: 0,
                                Price: 1900,
                                Code: 'BFEE',
                                Currency: 'COP',
                                Description: 'TARIFA ADMINISTRATIVA WEB'
                            }
                        ]
                    },
                    Infant: {
                        FareBasis: 'TPROMD2',
                        Id: 2,
                        Price: 0,
                        Discount: 0,
                        Code: 'T ',
                        PriceWithoutTax: 0,
                        SeatCount: 14,
                        Taxes: [
                            {
                                Id: 781,
                                Price: 0,
                                Code: 'YS',
                                Currency: 'COP',
                                Description: 'YS - Sales Tax (Domestic)'
                            },
                            {
                                Id: 1501,
                                Price: 0,
                                Code: 'M1CD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            },
                            {
                                Id: 1523,
                                Price: 0,
                                Code: 'CAWD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            }
                        ]
                    },
                    PriceWithoutTax: 53308,
                    SeatCount: 14,
                    Refundable: false,
                    Taxes: [
                        {
                            Id: 646,
                            Price: 14800,
                            Code: 'CO',
                            Currency: 'COP',
                            Description: 'Airport Tax (Domestic) -BOG-'
                        },
                        {
                            Id: 781,
                            Price: 5064,
                            Code: 'YS',
                            Currency: 'COP',
                            Description: 'YS - Sales Tax (Domestic)'
                        },
                        {
                            Id: 1501,
                            Price: 0,
                            Code: 'M1CD',
                            Currency: 'COP',
                            Description: 'SSR as tax on FBC'
                        },
                        {
                            Id: 1523,
                            Price: 0,
                            Code: 'CAWD',
                            Currency: 'COP',
                            Description: 'SSR as tax on FBC'
                        },
                        {
                            Id: 0,
                            Price: 1900,
                            Code: 'BFEE',
                            Currency: 'COP',
                            Description: 'TARIFA ADMINISTRATIVA WEB'
                        }
                    ],
                    BookingFee: {
                        Id: 0,
                        Price: 10000,
                        Code: 'BFEE',
                        Currency: 'COP',
                        Description: 'TARIFA ADMINISTRATIVA WEB'
                    }
                }
            ],
            Legs: [
                {
                    Id: 7788,
                    DepartureDate: '2017-11-01T07:59:00',
                    ArrivalDate: '2017-11-01T09:31:00',
                    FlightTime: 92,
                    From: 'BOG',
                    To: 'CTG',
                    FlightNumber: '7316'
                }
            ],
            Key: '8288:11/1/2017 7:59:00 AM',
            LowestPriceWithoutTax: 53308,
            FlightTime: 92,
            Soldout: false,
            IsInternational: false,
            IsPlaceHolder: false
        },
        {
            FlightNumber: '7540',
            Id: 8404,
            From: {
                Name: 'Bogota',
                Code: 'BOG'
            },
            To: {
                Name: 'Cartagena',
                Code: 'CTG'
            },
            DepartureDateTime: '2017-11-01T07:59:00',
            ArrivalDateTime: '2017-11-01T09:31:00',
            LowestFareId: 6,
            Cabin: '',
            LowestPrice: 116836,
            LowestPriceDiscount: 0,
            Fares: [
                {
                    Discount: 0,
                    FareBasis: 'NPROMD1',
                    Name: 'PROMOCIONALES_EZY',
                    Id: 6,
                    Price: 116836,
                    Code: 'N',
                    Adult: {
                        FareBasis: 'NPROMD1',
                        Id: 6,
                        Price: 58418,
                        Discount: 0,
                        Code: 'N ',
                        PriceWithoutTax: 26654,
                        SeatCount: 10,
                        Taxes: [
                            {
                                Id: 646,
                                Price: 14800,
                                Code: 'CO',
                                Currency: 'COP',
                                Description: 'Airport Tax (Domestic) -BOG-'
                            },
                            {
                                Id: 781,
                                Price: 5064,
                                Code: 'YS',
                                Currency: 'COP',
                                Description: 'YS - Sales Tax (Domestic)'
                            },
                            {
                                Id: 1501,
                                Price: 0,
                                Code: 'M1CD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            },
                            {
                                Id: 1523,
                                Price: 0,
                                Code: 'CAWD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            },
                            {
                                Id: 0,
                                Price: 1900,
                                Code: 'BFEE',
                                Currency: 'COP',
                                Description: 'TARIFA ADMINISTRATIVA WEB'
                            }
                        ]
                    },
                    Child: {
                        FareBasis: 'NPROMD1',
                        Id: 10,
                        Price: 58418,
                        Discount: 0,
                        Code: 'N ',
                        PriceWithoutTax: 26654,
                        SeatCount: 10,
                        Taxes: [
                            {
                                Id: 646,
                                Price: 14800,
                                Code: 'CO',
                                Currency: 'COP',
                                Description: 'Airport Tax (Domestic) -BOG-'
                            },
                            {
                                Id: 781,
                                Price: 5064,
                                Code: 'YS',
                                Currency: 'COP',
                                Description: 'YS - Sales Tax (Domestic)'
                            },
                            {
                                Id: 1501,
                                Price: 0,
                                Code: 'M1CD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            },
                            {
                                Id: 1523,
                                Price: 0,
                                Code: 'CAWD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            },
                            {
                                Id: 0,
                                Price: 1900,
                                Code: 'BFEE',
                                Currency: 'COP',
                                Description: 'TARIFA ADMINISTRATIVA WEB'
                            }
                        ]
                    },
                    Infant: {
                        FareBasis: 'TPROMD2',
                        Id: 7,
                        Price: 0,
                        Discount: 0,
                        Code: 'T ',
                        PriceWithoutTax: 0,
                        SeatCount: 14,
                        Taxes: [
                            {
                                Id: 781,
                                Price: 0,
                                Code: 'YS',
                                Currency: 'COP',
                                Description: 'YS - Sales Tax (Domestic)'
                            },
                            {
                                Id: 1501,
                                Price: 0,
                                Code: 'M1CD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            },
                            {
                                Id: 1523,
                                Price: 0,
                                Code: 'CAWD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            }
                        ]
                    },
                    PriceWithoutTax: 53308,
                    SeatCount: 10,
                    Refundable: false,
                    Taxes: [
                        {
                            Id: 646,
                            Price: 14800,
                            Code: 'CO',
                            Currency: 'COP',
                            Description: 'Airport Tax (Domestic) -BOG-'
                        },
                        {
                            Id: 781,
                            Price: 5064,
                            Code: 'YS',
                            Currency: 'COP',
                            Description: 'YS - Sales Tax (Domestic)'
                        },
                        {
                            Id: 1501,
                            Price: 0,
                            Code: 'M1CD',
                            Currency: 'COP',
                            Description: 'SSR as tax on FBC'
                        },
                        {
                            Id: 1523,
                            Price: 0,
                            Code: 'CAWD',
                            Currency: 'COP',
                            Description: 'SSR as tax on FBC'
                        },
                        {
                            Id: 0,
                            Price: 1900,
                            Code: 'BFEE',
                            Currency: 'COP',
                            Description: 'TARIFA ADMINISTRATIVA WEB'
                        }
                    ],
                    BookingFee: {
                        Id: 0,
                        Price: 10000,
                        Code: 'BFEE',
                        Currency: 'COP',
                        Description: 'TARIFA ADMINISTRATIVA WEB'
                    }
                }
            ],
            Legs: [
                {
                    Id: 7844,
                    DepartureDate: '2017-11-01T07:59:00',
                    ArrivalDate: '2017-11-01T09:31:00',
                    FlightTime: 92,
                    From: 'BOG',
                    To: 'CTG',
                    FlightNumber: '7540'
                }
            ],
            Key: '8404:11/1/2017 7:59:00 AM',
            LowestPriceWithoutTax: 53308,
            FlightTime: 92,
            Soldout: false,
            IsInternational: false,
            IsPlaceHolder: false
        },
        {
            FlightNumber: '7258',
            Id: 7344,
            From: {
                Name: 'Bogota',
                Code: 'BOG'
            },
            To: {
                Name: 'Cartagena',
                Code: 'CTG'
            },
            DepartureDateTime: '2017-11-01T10:14:00',
            ArrivalDateTime: '2017-11-01T12:43:00',
            LowestFareId: 11,
            Cabin: '',
            LowestPrice: 116836,
            LowestPriceDiscount: 0,
            Fares: [
                {
                    Discount: 0,
                    FareBasis: 'NPROMD1',
                    Name: 'PROMOCIONALES_EZY',
                    Id: 11,
                    Price: 116836,
                    Code: 'N',
                    Adult: {
                        FareBasis: 'NPROMD1',
                        Id: 11,
                        Price: 58418,
                        Discount: 0,
                        Code: 'N ',
                        PriceWithoutTax: 26654,
                        SeatCount: 10,
                        Taxes: [
                            {
                                Id: 646,
                                Price: 14800,
                                Code: 'CO',
                                Currency: 'COP',
                                Description: 'Airport Tax (Domestic) -BOG-'
                            },
                            {
                                Id: 781,
                                Price: 5064,
                                Code: 'YS',
                                Currency: 'COP',
                                Description: 'YS - Sales Tax (Domestic)'
                            },
                            {
                                Id: 1501,
                                Price: 0,
                                Code: 'M1CD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            },
                            {
                                Id: 1523,
                                Price: 0,
                                Code: 'CAWD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            },
                            {
                                Id: 0,
                                Price: 1900,
                                Code: 'BFEE',
                                Currency: 'COP',
                                Description: 'TARIFA ADMINISTRATIVA WEB'
                            }
                        ]
                    },
                    Child: {
                        FareBasis: 'NPROMD1',
                        Id: 15,
                        Price: 58418,
                        Discount: 0,
                        Code: 'N ',
                        PriceWithoutTax: 26654,
                        SeatCount: 10,
                        Taxes: [
                            {
                                Id: 646,
                                Price: 14800,
                                Code: 'CO',
                                Currency: 'COP',
                                Description: 'Airport Tax (Domestic) -BOG-'
                            },
                            {
                                Id: 781,
                                Price: 5064,
                                Code: 'YS',
                                Currency: 'COP',
                                Description: 'YS - Sales Tax (Domestic)'
                            },
                            {
                                Id: 1501,
                                Price: 0,
                                Code: 'M1CD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            },
                            {
                                Id: 1523,
                                Price: 0,
                                Code: 'CAWD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            },
                            {
                                Id: 0,
                                Price: 1900,
                                Code: 'BFEE',
                                Currency: 'COP',
                                Description: 'TARIFA ADMINISTRATIVA WEB'
                            }
                        ]
                    },
                    Infant: {
                        FareBasis: 'TPROMD2',
                        Id: 12,
                        Price: 0,
                        Discount: 0,
                        Code: 'T ',
                        PriceWithoutTax: 0,
                        SeatCount: 14,
                        Taxes: [
                            {
                                Id: 781,
                                Price: 0,
                                Code: 'YS',
                                Currency: 'COP',
                                Description: 'YS - Sales Tax (Domestic)'
                            },
                            {
                                Id: 1501,
                                Price: 0,
                                Code: 'M1CD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            },
                            {
                                Id: 1523,
                                Price: 0,
                                Code: 'CAWD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            }
                        ]
                    },
                    PriceWithoutTax: 53308,
                    SeatCount: 10,
                    Refundable: false,
                    Taxes: [
                        {
                            Id: 646,
                            Price: 14800,
                            Code: 'CO',
                            Currency: 'COP',
                            Description: 'Airport Tax (Domestic) -BOG-'
                        },
                        {
                            Id: 781,
                            Price: 5064,
                            Code: 'YS',
                            Currency: 'COP',
                            Description: 'YS - Sales Tax (Domestic)'
                        },
                        {
                            Id: 1501,
                            Price: 0,
                            Code: 'M1CD',
                            Currency: 'COP',
                            Description: 'SSR as tax on FBC'
                        },
                        {
                            Id: 1523,
                            Price: 0,
                            Code: 'CAWD',
                            Currency: 'COP',
                            Description: 'SSR as tax on FBC'
                        },
                        {
                            Id: 0,
                            Price: 1900,
                            Code: 'BFEE',
                            Currency: 'COP',
                            Description: 'TARIFA ADMINISTRATIVA WEB'
                        }
                    ],
                    BookingFee: {
                        Id: 0,
                        Price: 10000,
                        Code: 'BFEE',
                        Currency: 'COP',
                        Description: 'TARIFA ADMINISTRATIVA WEB'
                    }
                }
            ],
            Legs: [
                {
                    Id: 6984,
                    DepartureDate: '2017-11-01T10:14:00',
                    ArrivalDate: '2017-11-01T12:43:00',
                    FlightTime: 149,
                    From: 'BOG',
                    To: 'CTG',
                    FlightNumber: '7258'
                }
            ],
            Key: '7344:11/1/2017 10:14:00 AM',
            LowestPriceWithoutTax: 53308,
            FlightTime: 149,
            Soldout: false,
            IsInternational: false,
            IsPlaceHolder: false
        },
        {
            FlightNumber: '7318',
            Id: 8290,
            From: {
                Name: 'Bogota',
                Code: 'BOG'
            },
            To: {
                Name: 'Cartagena',
                Code: 'CTG'
            },
            DepartureDateTime: '2017-11-01T21:59:00',
            ArrivalDateTime: '2017-11-01T23:31:00',
            LowestFareId: 16,
            Cabin: '',
            LowestPrice: 116836,
            LowestPriceDiscount: 0,
            Fares: [
                {
                    Discount: 0,
                    FareBasis: 'NPROMD1',
                    Name: 'PROMOCIONALES_EZY',
                    Id: 16,
                    Price: 116836,
                    Code: 'N',
                    Adult: {
                        FareBasis: 'NPROMD1',
                        Id: 16,
                        Price: 58418,
                        Discount: 0,
                        Code: 'N ',
                        PriceWithoutTax: 26654,
                        SeatCount: 14,
                        Taxes: [
                            {
                                Id: 646,
                                Price: 14800,
                                Code: 'CO',
                                Currency: 'COP',
                                Description: 'Airport Tax (Domestic) -BOG-'
                            },
                            {
                                Id: 781,
                                Price: 5064,
                                Code: 'YS',
                                Currency: 'COP',
                                Description: 'YS - Sales Tax (Domestic)'
                            },
                            {
                                Id: 1501,
                                Price: 0,
                                Code: 'M1CD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            },
                            {
                                Id: 1523,
                                Price: 0,
                                Code: 'CAWD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            },
                            {
                                Id: 0,
                                Price: 1900,
                                Code: 'BFEE',
                                Currency: 'COP',
                                Description: 'TARIFA ADMINISTRATIVA WEB'
                            }
                        ]
                    },
                    Child: {
                        FareBasis: 'NPROMD1',
                        Id: 20,
                        Price: 58418,
                        Discount: 0,
                        Code: 'N ',
                        PriceWithoutTax: 26654,
                        SeatCount: 14,
                        Taxes: [
                            {
                                Id: 646,
                                Price: 14800,
                                Code: 'CO',
                                Currency: 'COP',
                                Description: 'Airport Tax (Domestic) -BOG-'
                            },
                            {
                                Id: 781,
                                Price: 5064,
                                Code: 'YS',
                                Currency: 'COP',
                                Description: 'YS - Sales Tax (Domestic)'
                            },
                            {
                                Id: 1501,
                                Price: 0,
                                Code: 'M1CD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            },
                            {
                                Id: 1523,
                                Price: 0,
                                Code: 'CAWD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            },
                            {
                                Id: 0,
                                Price: 1900,
                                Code: 'BFEE',
                                Currency: 'COP',
                                Description: 'TARIFA ADMINISTRATIVA WEB'
                            }
                        ]
                    },
                    Infant: {
                        FareBasis: 'TPROMD2',
                        Id: 17,
                        Price: 0,
                        Discount: 0,
                        Code: 'T ',
                        PriceWithoutTax: 0,
                        SeatCount: 14,
                        Taxes: [
                            {
                                Id: 781,
                                Price: 0,
                                Code: 'YS',
                                Currency: 'COP',
                                Description: 'YS - Sales Tax (Domestic)'
                            },
                            {
                                Id: 1501,
                                Price: 0,
                                Code: 'M1CD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            },
                            {
                                Id: 1523,
                                Price: 0,
                                Code: 'CAWD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            }
                        ]
                    },
                    PriceWithoutTax: 53308,
                    SeatCount: 14,
                    Refundable: false,
                    Taxes: [
                        {
                            Id: 646,
                            Price: 14800,
                            Code: 'CO',
                            Currency: 'COP',
                            Description: 'Airport Tax (Domestic) -BOG-'
                        },
                        {
                            Id: 781,
                            Price: 5064,
                            Code: 'YS',
                            Currency: 'COP',
                            Description: 'YS - Sales Tax (Domestic)'
                        },
                        {
                            Id: 1501,
                            Price: 0,
                            Code: 'M1CD',
                            Currency: 'COP',
                            Description: 'SSR as tax on FBC'
                        },
                        {
                            Id: 1523,
                            Price: 0,
                            Code: 'CAWD',
                            Currency: 'COP',
                            Description: 'SSR as tax on FBC'
                        },
                        {
                            Id: 0,
                            Price: 1900,
                            Code: 'BFEE',
                            Currency: 'COP',
                            Description: 'TARIFA ADMINISTRATIVA WEB'
                        }
                    ],
                    BookingFee: {
                        Id: 0,
                        Price: 10000,
                        Code: 'BFEE',
                        Currency: 'COP',
                        Description: 'TARIFA ADMINISTRATIVA WEB'
                    }
                }
            ],
            Legs: [
                {
                    Id: 7790,
                    DepartureDate: '2017-11-01T21:59:00',
                    ArrivalDate: '2017-11-01T23:31:00',
                    FlightTime: 92,
                    From: 'BOG',
                    To: 'CTG',
                    FlightNumber: '7318'
                }
            ],
            Key: '8290:11/1/2017 9:59:00 PM',
            LowestPriceWithoutTax: 53308,
            FlightTime: 92,
            Soldout: false,
            IsInternational: false,
            IsPlaceHolder: false
        },
        {
            FlightNumber: '7316',
            Id: 8288,
            From: {
                Name: 'Bogota',
                Code: 'BOG'
            },
            To: {
                Name: 'Cartagena',
                Code: 'CTG'
            },
            DepartureDateTime: '2017-11-02T07:59:00',
            ArrivalDateTime: '2017-11-02T09:31:00',
            LowestFareId: 21,
            Cabin: '',
            LowestPrice: 116836,
            LowestPriceDiscount: 0,
            Fares: [
                {
                    Discount: 0,
                    FareBasis: 'NPROMD1',
                    Name: 'PROMOCIONALES_EZY',
                    Id: 21,
                    Price: 116836,
                    Code: 'N',
                    Adult: {
                        FareBasis: 'NPROMD1',
                        Id: 21,
                        Price: 58418,
                        Discount: 0,
                        Code: 'N ',
                        PriceWithoutTax: 26654,
                        SeatCount: 14,
                        Taxes: [
                            {
                                Id: 646,
                                Price: 14800,
                                Code: 'CO',
                                Currency: 'COP',
                                Description: 'Airport Tax (Domestic) -BOG-'
                            },
                            {
                                Id: 781,
                                Price: 5064,
                                Code: 'YS',
                                Currency: 'COP',
                                Description: 'YS - Sales Tax (Domestic)'
                            },
                            {
                                Id: 1501,
                                Price: 0,
                                Code: 'M1CD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            },
                            {
                                Id: 1523,
                                Price: 0,
                                Code: 'CAWD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            },
                            {
                                Id: 0,
                                Price: 1900,
                                Code: 'BFEE',
                                Currency: 'COP',
                                Description: 'TARIFA ADMINISTRATIVA WEB'
                            }
                        ]
                    },
                    Child: {
                        FareBasis: 'NPROMD1',
                        Id: 25,
                        Price: 58418,
                        Discount: 0,
                        Code: 'N ',
                        PriceWithoutTax: 26654,
                        SeatCount: 14,
                        Taxes: [
                            {
                                Id: 646,
                                Price: 14800,
                                Code: 'CO',
                                Currency: 'COP',
                                Description: 'Airport Tax (Domestic) -BOG-'
                            },
                            {
                                Id: 781,
                                Price: 5064,
                                Code: 'YS',
                                Currency: 'COP',
                                Description: 'YS - Sales Tax (Domestic)'
                            },
                            {
                                Id: 1501,
                                Price: 0,
                                Code: 'M1CD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            },
                            {
                                Id: 1523,
                                Price: 0,
                                Code: 'CAWD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            },
                            {
                                Id: 0,
                                Price: 1900,
                                Code: 'BFEE',
                                Currency: 'COP',
                                Description: 'TARIFA ADMINISTRATIVA WEB'
                            }
                        ]
                    },
                    Infant: {
                        FareBasis: 'TPROMD2',
                        Id: 22,
                        Price: 0,
                        Discount: 0,
                        Code: 'T ',
                        PriceWithoutTax: 0,
                        SeatCount: 14,
                        Taxes: [
                            {
                                Id: 781,
                                Price: 0,
                                Code: 'YS',
                                Currency: 'COP',
                                Description: 'YS - Sales Tax (Domestic)'
                            },
                            {
                                Id: 1501,
                                Price: 0,
                                Code: 'M1CD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            },
                            {
                                Id: 1523,
                                Price: 0,
                                Code: 'CAWD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            }
                        ]
                    },
                    PriceWithoutTax: 53308,
                    SeatCount: 14,
                    Refundable: false,
                    Taxes: [
                        {
                            Id: 646,
                            Price: 14800,
                            Code: 'CO',
                            Currency: 'COP',
                            Description: 'Airport Tax (Domestic) -BOG-'
                        },
                        {
                            Id: 781,
                            Price: 5064,
                            Code: 'YS',
                            Currency: 'COP',
                            Description: 'YS - Sales Tax (Domestic)'
                        },
                        {
                            Id: 1501,
                            Price: 0,
                            Code: 'M1CD',
                            Currency: 'COP',
                            Description: 'SSR as tax on FBC'
                        },
                        {
                            Id: 1523,
                            Price: 0,
                            Code: 'CAWD',
                            Currency: 'COP',
                            Description: 'SSR as tax on FBC'
                        },
                        {
                            Id: 0,
                            Price: 1900,
                            Code: 'BFEE',
                            Currency: 'COP',
                            Description: 'TARIFA ADMINISTRATIVA WEB'
                        }
                    ],
                    BookingFee: {
                        Id: 0,
                        Price: 10000,
                        Code: 'BFEE',
                        Currency: 'COP',
                        Description: 'TARIFA ADMINISTRATIVA WEB'
                    }
                }
            ],
            Legs: [
                {
                    Id: 7788,
                    DepartureDate: '2017-11-02T07:59:00',
                    ArrivalDate: '2017-11-02T09:31:00',
                    FlightTime: 92,
                    From: 'BOG',
                    To: 'CTG',
                    FlightNumber: '7316'
                }
            ],
            Key: '8288:11/2/2017 7:59:00 AM',
            LowestPriceWithoutTax: 53308,
            FlightTime: 92,
            Soldout: false,
            IsInternational: false,
            IsPlaceHolder: false
        },
        {
            FlightNumber: '7540',
            Id: 8404,
            From: {
                Name: 'Bogota',
                Code: 'BOG'
            },
            To: {
                Name: 'Cartagena',
                Code: 'CTG'
            },
            DepartureDateTime: '2017-11-02T07:59:00',
            ArrivalDateTime: '2017-11-02T09:31:00',
            LowestFareId: 26,
            Cabin: '',
            LowestPrice: 116836,
            LowestPriceDiscount: 0,
            Fares: [
                {
                    Discount: 0,
                    FareBasis: 'NPROMD1',
                    Name: 'PROMOCIONALES_EZY',
                    Id: 26,
                    Price: 116836,
                    Code: 'N',
                    Adult: {
                        FareBasis: 'NPROMD1',
                        Id: 26,
                        Price: 58418,
                        Discount: 0,
                        Code: 'N ',
                        PriceWithoutTax: 26654,
                        SeatCount: 10,
                        Taxes: [
                            {
                                Id: 646,
                                Price: 14800,
                                Code: 'CO',
                                Currency: 'COP',
                                Description: 'Airport Tax (Domestic) -BOG-'
                            },
                            {
                                Id: 781,
                                Price: 5064,
                                Code: 'YS',
                                Currency: 'COP',
                                Description: 'YS - Sales Tax (Domestic)'
                            },
                            {
                                Id: 1501,
                                Price: 0,
                                Code: 'M1CD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            },
                            {
                                Id: 1523,
                                Price: 0,
                                Code: 'CAWD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            },
                            {
                                Id: 0,
                                Price: 1900,
                                Code: 'BFEE',
                                Currency: 'COP',
                                Description: 'TARIFA ADMINISTRATIVA WEB'
                            }
                        ]
                    },
                    Child: {
                        FareBasis: 'NPROMD1',
                        Id: 30,
                        Price: 58418,
                        Discount: 0,
                        Code: 'N ',
                        PriceWithoutTax: 26654,
                        SeatCount: 10,
                        Taxes: [
                            {
                                Id: 646,
                                Price: 14800,
                                Code: 'CO',
                                Currency: 'COP',
                                Description: 'Airport Tax (Domestic) -BOG-'
                            },
                            {
                                Id: 781,
                                Price: 5064,
                                Code: 'YS',
                                Currency: 'COP',
                                Description: 'YS - Sales Tax (Domestic)'
                            },
                            {
                                Id: 1501,
                                Price: 0,
                                Code: 'M1CD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            },
                            {
                                Id: 1523,
                                Price: 0,
                                Code: 'CAWD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            },
                            {
                                Id: 0,
                                Price: 1900,
                                Code: 'BFEE',
                                Currency: 'COP',
                                Description: 'TARIFA ADMINISTRATIVA WEB'
                            }
                        ]
                    },
                    Infant: {
                        FareBasis: 'TPROMD2',
                        Id: 27,
                        Price: 0,
                        Discount: 0,
                        Code: 'T ',
                        PriceWithoutTax: 0,
                        SeatCount: 14,
                        Taxes: [
                            {
                                Id: 781,
                                Price: 0,
                                Code: 'YS',
                                Currency: 'COP',
                                Description: 'YS - Sales Tax (Domestic)'
                            },
                            {
                                Id: 1501,
                                Price: 0,
                                Code: 'M1CD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            },
                            {
                                Id: 1523,
                                Price: 0,
                                Code: 'CAWD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            }
                        ]
                    },
                    PriceWithoutTax: 53308,
                    SeatCount: 10,
                    Refundable: false,
                    Taxes: [
                        {
                            Id: 646,
                            Price: 14800,
                            Code: 'CO',
                            Currency: 'COP',
                            Description: 'Airport Tax (Domestic) -BOG-'
                        },
                        {
                            Id: 781,
                            Price: 5064,
                            Code: 'YS',
                            Currency: 'COP',
                            Description: 'YS - Sales Tax (Domestic)'
                        },
                        {
                            Id: 1501,
                            Price: 0,
                            Code: 'M1CD',
                            Currency: 'COP',
                            Description: 'SSR as tax on FBC'
                        },
                        {
                            Id: 1523,
                            Price: 0,
                            Code: 'CAWD',
                            Currency: 'COP',
                            Description: 'SSR as tax on FBC'
                        },
                        {
                            Id: 0,
                            Price: 1900,
                            Code: 'BFEE',
                            Currency: 'COP',
                            Description: 'TARIFA ADMINISTRATIVA WEB'
                        }
                    ],
                    BookingFee: {
                        Id: 0,
                        Price: 10000,
                        Code: 'BFEE',
                        Currency: 'COP',
                        Description: 'TARIFA ADMINISTRATIVA WEB'
                    }
                }
            ],
            Legs: [
                {
                    Id: 7844,
                    DepartureDate: '2017-11-02T07:59:00',
                    ArrivalDate: '2017-11-02T09:31:00',
                    FlightTime: 92,
                    From: 'BOG',
                    To: 'CTG',
                    FlightNumber: '7540'
                }
            ],
            Key: '8404:11/2/2017 7:59:00 AM',
            LowestPriceWithoutTax: 53308,
            FlightTime: 92,
            Soldout: false,
            IsInternational: false,
            IsPlaceHolder: false
        },
        {
            FlightNumber: '7318',
            Id: 8290,
            From: {
                Name: 'Bogota',
                Code: 'BOG'
            },
            To: {
                Name: 'Cartagena',
                Code: 'CTG'
            },
            DepartureDateTime: '2017-11-02T21:59:00',
            ArrivalDateTime: '2017-11-02T23:31:00',
            LowestFareId: 31,
            Cabin: '',
            LowestPrice: 116836,
            LowestPriceDiscount: 0,
            Fares: [
                {
                    Discount: 0,
                    FareBasis: 'NPROMD1',
                    Name: 'PROMOCIONALES_EZY',
                    Id: 31,
                    Price: 116836,
                    Code: 'N',
                    Adult: {
                        FareBasis: 'NPROMD1',
                        Id: 31,
                        Price: 58418,
                        Discount: 0,
                        Code: 'N ',
                        PriceWithoutTax: 26654,
                        SeatCount: 14,
                        Taxes: [
                            {
                                Id: 646,
                                Price: 14800,
                                Code: 'CO',
                                Currency: 'COP',
                                Description: 'Airport Tax (Domestic) -BOG-'
                            },
                            {
                                Id: 781,
                                Price: 5064,
                                Code: 'YS',
                                Currency: 'COP',
                                Description: 'YS - Sales Tax (Domestic)'
                            },
                            {
                                Id: 1501,
                                Price: 0,
                                Code: 'M1CD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            },
                            {
                                Id: 1523,
                                Price: 0,
                                Code: 'CAWD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            },
                            {
                                Id: 0,
                                Price: 1900,
                                Code: 'BFEE',
                                Currency: 'COP',
                                Description: 'TARIFA ADMINISTRATIVA WEB'
                            }
                        ]
                    },
                    Child: {
                        FareBasis: 'NPROMD1',
                        Id: 35,
                        Price: 58418,
                        Discount: 0,
                        Code: 'N ',
                        PriceWithoutTax: 26654,
                        SeatCount: 14,
                        Taxes: [
                            {
                                Id: 646,
                                Price: 14800,
                                Code: 'CO',
                                Currency: 'COP',
                                Description: 'Airport Tax (Domestic) -BOG-'
                            },
                            {
                                Id: 781,
                                Price: 5064,
                                Code: 'YS',
                                Currency: 'COP',
                                Description: 'YS - Sales Tax (Domestic)'
                            },
                            {
                                Id: 1501,
                                Price: 0,
                                Code: 'M1CD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            },
                            {
                                Id: 1523,
                                Price: 0,
                                Code: 'CAWD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            },
                            {
                                Id: 0,
                                Price: 1900,
                                Code: 'BFEE',
                                Currency: 'COP',
                                Description: 'TARIFA ADMINISTRATIVA WEB'
                            }
                        ]
                    },
                    Infant: {
                        FareBasis: 'TPROMD2',
                        Id: 32,
                        Price: 0,
                        Discount: 0,
                        Code: 'T ',
                        PriceWithoutTax: 0,
                        SeatCount: 14,
                        Taxes: [
                            {
                                Id: 781,
                                Price: 0,
                                Code: 'YS',
                                Currency: 'COP',
                                Description: 'YS - Sales Tax (Domestic)'
                            },
                            {
                                Id: 1501,
                                Price: 0,
                                Code: 'M1CD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            },
                            {
                                Id: 1523,
                                Price: 0,
                                Code: 'CAWD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            }
                        ]
                    },
                    PriceWithoutTax: 53308,
                    SeatCount: 14,
                    Refundable: false,
                    Taxes: [
                        {
                            Id: 646,
                            Price: 14800,
                            Code: 'CO',
                            Currency: 'COP',
                            Description: 'Airport Tax (Domestic) -BOG-'
                        },
                        {
                            Id: 781,
                            Price: 5064,
                            Code: 'YS',
                            Currency: 'COP',
                            Description: 'YS - Sales Tax (Domestic)'
                        },
                        {
                            Id: 1501,
                            Price: 0,
                            Code: 'M1CD',
                            Currency: 'COP',
                            Description: 'SSR as tax on FBC'
                        },
                        {
                            Id: 1523,
                            Price: 0,
                            Code: 'CAWD',
                            Currency: 'COP',
                            Description: 'SSR as tax on FBC'
                        },
                        {
                            Id: 0,
                            Price: 1900,
                            Code: 'BFEE',
                            Currency: 'COP',
                            Description: 'TARIFA ADMINISTRATIVA WEB'
                        }
                    ],
                    BookingFee: {
                        Id: 0,
                        Price: 10000,
                        Code: 'BFEE',
                        Currency: 'COP',
                        Description: 'TARIFA ADMINISTRATIVA WEB'
                    }
                }
            ],
            Legs: [
                {
                    Id: 7790,
                    DepartureDate: '2017-11-02T21:59:00',
                    ArrivalDate: '2017-11-02T23:31:00',
                    FlightTime: 92,
                    From: 'BOG',
                    To: 'CTG',
                    FlightNumber: '7318'
                }
            ],
            Key: '8290:11/2/2017 9:59:00 PM',
            LowestPriceWithoutTax: 53308,
            FlightTime: 92,
            Soldout: false,
            IsInternational: false,
            IsPlaceHolder: false
        },
        {
            FlightNumber: '7316',
            Id: 8288,
            From: {
                Name: 'Bogota',
                Code: 'BOG'
            },
            To: {
                Name: 'Cartagena',
                Code: 'CTG'
            },
            DepartureDateTime: '2017-11-03T07:59:00',
            ArrivalDateTime: '2017-11-03T09:31:00',
            LowestFareId: 36,
            Cabin: '',
            LowestPrice: 116836,
            LowestPriceDiscount: 0,
            Fares: [
                {
                    Discount: 0,
                    FareBasis: 'NPROMD1',
                    Name: 'PROMOCIONALES_EZY',
                    Id: 36,
                    Price: 116836,
                    Code: 'N',
                    Adult: {
                        FareBasis: 'NPROMD1',
                        Id: 36,
                        Price: 58418,
                        Discount: 0,
                        Code: 'N ',
                        PriceWithoutTax: 26654,
                        SeatCount: 14,
                        Taxes: [
                            {
                                Id: 646,
                                Price: 14800,
                                Code: 'CO',
                                Currency: 'COP',
                                Description: 'Airport Tax (Domestic) -BOG-'
                            },
                            {
                                Id: 781,
                                Price: 5064,
                                Code: 'YS',
                                Currency: 'COP',
                                Description: 'YS - Sales Tax (Domestic)'
                            },
                            {
                                Id: 1501,
                                Price: 0,
                                Code: 'M1CD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            },
                            {
                                Id: 1523,
                                Price: 0,
                                Code: 'CAWD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            },
                            {
                                Id: 0,
                                Price: 1900,
                                Code: 'BFEE',
                                Currency: 'COP',
                                Description: 'TARIFA ADMINISTRATIVA WEB'
                            }
                        ]
                    },
                    Child: {
                        FareBasis: 'NPROMD1',
                        Id: 40,
                        Price: 58418,
                        Discount: 0,
                        Code: 'N ',
                        PriceWithoutTax: 26654,
                        SeatCount: 14,
                        Taxes: [
                            {
                                Id: 646,
                                Price: 14800,
                                Code: 'CO',
                                Currency: 'COP',
                                Description: 'Airport Tax (Domestic) -BOG-'
                            },
                            {
                                Id: 781,
                                Price: 5064,
                                Code: 'YS',
                                Currency: 'COP',
                                Description: 'YS - Sales Tax (Domestic)'
                            },
                            {
                                Id: 1501,
                                Price: 0,
                                Code: 'M1CD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            },
                            {
                                Id: 1523,
                                Price: 0,
                                Code: 'CAWD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            },
                            {
                                Id: 0,
                                Price: 1900,
                                Code: 'BFEE',
                                Currency: 'COP',
                                Description: 'TARIFA ADMINISTRATIVA WEB'
                            }
                        ]
                    },
                    Infant: {
                        FareBasis: 'TPROMD2',
                        Id: 37,
                        Price: 0,
                        Discount: 0,
                        Code: 'T ',
                        PriceWithoutTax: 0,
                        SeatCount: 14,
                        Taxes: [
                            {
                                Id: 781,
                                Price: 0,
                                Code: 'YS',
                                Currency: 'COP',
                                Description: 'YS - Sales Tax (Domestic)'
                            },
                            {
                                Id: 1501,
                                Price: 0,
                                Code: 'M1CD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            },
                            {
                                Id: 1523,
                                Price: 0,
                                Code: 'CAWD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            }
                        ]
                    },
                    PriceWithoutTax: 53308,
                    SeatCount: 14,
                    Refundable: false,
                    Taxes: [
                        {
                            Id: 646,
                            Price: 14800,
                            Code: 'CO',
                            Currency: 'COP',
                            Description: 'Airport Tax (Domestic) -BOG-'
                        },
                        {
                            Id: 781,
                            Price: 5064,
                            Code: 'YS',
                            Currency: 'COP',
                            Description: 'YS - Sales Tax (Domestic)'
                        },
                        {
                            Id: 1501,
                            Price: 0,
                            Code: 'M1CD',
                            Currency: 'COP',
                            Description: 'SSR as tax on FBC'
                        },
                        {
                            Id: 1523,
                            Price: 0,
                            Code: 'CAWD',
                            Currency: 'COP',
                            Description: 'SSR as tax on FBC'
                        },
                        {
                            Id: 0,
                            Price: 1900,
                            Code: 'BFEE',
                            Currency: 'COP',
                            Description: 'TARIFA ADMINISTRATIVA WEB'
                        }
                    ],
                    BookingFee: {
                        Id: 0,
                        Price: 10000,
                        Code: 'BFEE',
                        Currency: 'COP',
                        Description: 'TARIFA ADMINISTRATIVA WEB'
                    }
                }
            ],
            Legs: [
                {
                    Id: 7788,
                    DepartureDate: '2017-11-03T07:59:00',
                    ArrivalDate: '2017-11-03T09:31:00',
                    FlightTime: 92,
                    From: 'BOG',
                    To: 'CTG',
                    FlightNumber: '7316'
                }
            ],
            Key: '8288:11/3/2017 7:59:00 AM',
            LowestPriceWithoutTax: 53308,
            FlightTime: 92,
            Soldout: false,
            IsInternational: false,
            IsPlaceHolder: false
        },
        {
            FlightNumber: '7540',
            Id: 8404,
            From: {
                Name: 'Bogota',
                Code: 'BOG'
            },
            To: {
                Name: 'Cartagena',
                Code: 'CTG'
            },
            DepartureDateTime: '2017-11-03T07:59:00',
            ArrivalDateTime: '2017-11-03T09:31:00',
            LowestFareId: 41,
            Cabin: '',
            LowestPrice: 116836,
            LowestPriceDiscount: 0,
            Fares: [
                {
                    Discount: 0,
                    FareBasis: 'NPROMD1',
                    Name: 'PROMOCIONALES_EZY',
                    Id: 41,
                    Price: 116836,
                    Code: 'N',
                    Adult: {
                        FareBasis: 'NPROMD1',
                        Id: 41,
                        Price: 58418,
                        Discount: 0,
                        Code: 'N ',
                        PriceWithoutTax: 26654,
                        SeatCount: 10,
                        Taxes: [
                            {
                                Id: 646,
                                Price: 14800,
                                Code: 'CO',
                                Currency: 'COP',
                                Description: 'Airport Tax (Domestic) -BOG-'
                            },
                            {
                                Id: 781,
                                Price: 5064,
                                Code: 'YS',
                                Currency: 'COP',
                                Description: 'YS - Sales Tax (Domestic)'
                            },
                            {
                                Id: 1501,
                                Price: 0,
                                Code: 'M1CD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            },
                            {
                                Id: 1523,
                                Price: 0,
                                Code: 'CAWD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            },
                            {
                                Id: 0,
                                Price: 1900,
                                Code: 'BFEE',
                                Currency: 'COP',
                                Description: 'TARIFA ADMINISTRATIVA WEB'
                            }
                        ]
                    },
                    Child: {
                        FareBasis: 'NPROMD1',
                        Id: 45,
                        Price: 58418,
                        Discount: 0,
                        Code: 'N ',
                        PriceWithoutTax: 26654,
                        SeatCount: 10,
                        Taxes: [
                            {
                                Id: 646,
                                Price: 14800,
                                Code: 'CO',
                                Currency: 'COP',
                                Description: 'Airport Tax (Domestic) -BOG-'
                            },
                            {
                                Id: 781,
                                Price: 5064,
                                Code: 'YS',
                                Currency: 'COP',
                                Description: 'YS - Sales Tax (Domestic)'
                            },
                            {
                                Id: 1501,
                                Price: 0,
                                Code: 'M1CD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            },
                            {
                                Id: 1523,
                                Price: 0,
                                Code: 'CAWD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            },
                            {
                                Id: 0,
                                Price: 1900,
                                Code: 'BFEE',
                                Currency: 'COP',
                                Description: 'TARIFA ADMINISTRATIVA WEB'
                            }
                        ]
                    },
                    Infant: {
                        FareBasis: 'TPROMD2',
                        Id: 42,
                        Price: 0,
                        Discount: 0,
                        Code: 'T ',
                        PriceWithoutTax: 0,
                        SeatCount: 14,
                        Taxes: [
                            {
                                Id: 781,
                                Price: 0,
                                Code: 'YS',
                                Currency: 'COP',
                                Description: 'YS - Sales Tax (Domestic)'
                            },
                            {
                                Id: 1501,
                                Price: 0,
                                Code: 'M1CD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            },
                            {
                                Id: 1523,
                                Price: 0,
                                Code: 'CAWD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            }
                        ]
                    },
                    PriceWithoutTax: 53308,
                    SeatCount: 10,
                    Refundable: false,
                    Taxes: [
                        {
                            Id: 646,
                            Price: 14800,
                            Code: 'CO',
                            Currency: 'COP',
                            Description: 'Airport Tax (Domestic) -BOG-'
                        },
                        {
                            Id: 781,
                            Price: 5064,
                            Code: 'YS',
                            Currency: 'COP',
                            Description: 'YS - Sales Tax (Domestic)'
                        },
                        {
                            Id: 1501,
                            Price: 0,
                            Code: 'M1CD',
                            Currency: 'COP',
                            Description: 'SSR as tax on FBC'
                        },
                        {
                            Id: 1523,
                            Price: 0,
                            Code: 'CAWD',
                            Currency: 'COP',
                            Description: 'SSR as tax on FBC'
                        },
                        {
                            Id: 0,
                            Price: 1900,
                            Code: 'BFEE',
                            Currency: 'COP',
                            Description: 'TARIFA ADMINISTRATIVA WEB'
                        }
                    ],
                    BookingFee: {
                        Id: 0,
                        Price: 10000,
                        Code: 'BFEE',
                        Currency: 'COP',
                        Description: 'TARIFA ADMINISTRATIVA WEB'
                    }
                }
            ],
            Legs: [
                {
                    Id: 7844,
                    DepartureDate: '2017-11-03T07:59:00',
                    ArrivalDate: '2017-11-03T09:31:00',
                    FlightTime: 92,
                    From: 'BOG',
                    To: 'CTG',
                    FlightNumber: '7540'
                }
            ],
            Key: '8404:11/3/2017 7:59:00 AM',
            LowestPriceWithoutTax: 53308,
            FlightTime: 92,
            Soldout: false,
            IsInternational: false,
            IsPlaceHolder: false
        },
        {
            FlightNumber: '7318',
            Id: 8290,
            From: {
                Name: 'Bogota',
                Code: 'BOG'
            },
            To: {
                Name: 'Cartagena',
                Code: 'CTG'
            },
            DepartureDateTime: '2017-11-03T21:59:00',
            ArrivalDateTime: '2017-11-03T23:31:00',
            LowestFareId: 46,
            Cabin: '',
            LowestPrice: 116836,
            LowestPriceDiscount: 0,
            Fares: [
                {
                    Discount: 0,
                    FareBasis: 'NPROMD1',
                    Name: 'PROMOCIONALES_EZY',
                    Id: 46,
                    Price: 116836,
                    Code: 'N',
                    Adult: {
                        FareBasis: 'NPROMD1',
                        Id: 46,
                        Price: 58418,
                        Discount: 0,
                        Code: 'N ',
                        PriceWithoutTax: 26654,
                        SeatCount: 14,
                        Taxes: [
                            {
                                Id: 646,
                                Price: 14800,
                                Code: 'CO',
                                Currency: 'COP',
                                Description: 'Airport Tax (Domestic) -BOG-'
                            },
                            {
                                Id: 781,
                                Price: 5064,
                                Code: 'YS',
                                Currency: 'COP',
                                Description: 'YS - Sales Tax (Domestic)'
                            },
                            {
                                Id: 1501,
                                Price: 0,
                                Code: 'M1CD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            },
                            {
                                Id: 1523,
                                Price: 0,
                                Code: 'CAWD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            },
                            {
                                Id: 0,
                                Price: 1900,
                                Code: 'BFEE',
                                Currency: 'COP',
                                Description: 'TARIFA ADMINISTRATIVA WEB'
                            }
                        ]
                    },
                    Child: {
                        FareBasis: 'NPROMD1',
                        Id: 50,
                        Price: 58418,
                        Discount: 0,
                        Code: 'N ',
                        PriceWithoutTax: 26654,
                        SeatCount: 14,
                        Taxes: [
                            {
                                Id: 646,
                                Price: 14800,
                                Code: 'CO',
                                Currency: 'COP',
                                Description: 'Airport Tax (Domestic) -BOG-'
                            },
                            {
                                Id: 781,
                                Price: 5064,
                                Code: 'YS',
                                Currency: 'COP',
                                Description: 'YS - Sales Tax (Domestic)'
                            },
                            {
                                Id: 1501,
                                Price: 0,
                                Code: 'M1CD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            },
                            {
                                Id: 1523,
                                Price: 0,
                                Code: 'CAWD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            },
                            {
                                Id: 0,
                                Price: 1900,
                                Code: 'BFEE',
                                Currency: 'COP',
                                Description: 'TARIFA ADMINISTRATIVA WEB'
                            }
                        ]
                    },
                    Infant: {
                        FareBasis: 'TPROMD2',
                        Id: 47,
                        Price: 0,
                        Discount: 0,
                        Code: 'T ',
                        PriceWithoutTax: 0,
                        SeatCount: 14,
                        Taxes: [
                            {
                                Id: 781,
                                Price: 0,
                                Code: 'YS',
                                Currency: 'COP',
                                Description: 'YS - Sales Tax (Domestic)'
                            },
                            {
                                Id: 1501,
                                Price: 0,
                                Code: 'M1CD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            },
                            {
                                Id: 1523,
                                Price: 0,
                                Code: 'CAWD',
                                Currency: 'COP',
                                Description: 'SSR as tax on FBC'
                            }
                        ]
                    },
                    PriceWithoutTax: 53308,
                    SeatCount: 14,
                    Refundable: false,
                    Taxes: [
                        {
                            Id: 646,
                            Price: 14800,
                            Code: 'CO',
                            Currency: 'COP',
                            Description: 'Airport Tax (Domestic) -BOG-'
                        },
                        {
                            Id: 781,
                            Price: 5064,
                            Code: 'YS',
                            Currency: 'COP',
                            Description: 'YS - Sales Tax (Domestic)'
                        },
                        {
                            Id: 1501,
                            Price: 0,
                            Code: 'M1CD',
                            Currency: 'COP',
                            Description: 'SSR as tax on FBC'
                        },
                        {
                            Id: 1523,
                            Price: 0,
                            Code: 'CAWD',
                            Currency: 'COP',
                            Description: 'SSR as tax on FBC'
                        },
                        {
                            Id: 0,
                            Price: 1900,
                            Code: 'BFEE',
                            Currency: 'COP',
                            Description: 'TARIFA ADMINISTRATIVA WEB'
                        }
                    ],
                    BookingFee: {
                        Id: 0,
                        Price: 10000,
                        Code: 'BFEE',
                        Currency: 'COP',
                        Description: 'TARIFA ADMINISTRATIVA WEB'
                    }
                }
            ],
            Legs: [
                {
                    Id: 7790,
                    DepartureDate: '2017-11-03T21:59:00',
                    ArrivalDate: '2017-11-03T23:31:00',
                    FlightTime: 92,
                    From: 'BOG',
                    To: 'CTG',
                    FlightNumber: '7318'
                }
            ],
            Key: '8290:11/3/2017 9:59:00 PM',
            LowestPriceWithoutTax: 53308,
            FlightTime: 92,
            Soldout: false,
            IsInternational: false,
            IsPlaceHolder: false
        }
    ]
}
