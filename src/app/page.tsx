"use client";

import React from 'react';
import { Heading, Text, Flex, Button, Grid, Background, Icon, Navbar } from '@/once-ui/components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'; // Import Swiper styles

export default function Pricing() {
  const pricingPlans = [
    {
      name: "Free",
      price: "$0",
      features: [
        "1 Project",
        "5GB Storage",
        "Basic Support"
      ]
    },
    {
      name: "Pro",
      price: "$9.99",
      features: [
        "10 Projects",
        "50GB Storage",
        "Priority Support"
      ]
    },
    {
      name: "Enterprise",
      price: "$29.99",
      features: [
        "Unlimited Projects",
        "500GB Storage",
        "24/7 Support"
      ]
    }
  ];

  return (
    <Flex
      fillWidth direction="column" alignItems="center" flex={1}>
      
      {/* Navbar */}
      <Navbar>
        <Flex fillWidth justifyContent="space-between" padding="l">
          <Heading variant="display-strong-m" color="primary">My App</Heading>
          <Flex gap="l">
            <Button href="#home" variant="tertiary">Home</Button>
            <Button href="#pricing" variant="tertiary">Pricing</Button>
            <Button href="#contact" variant="tertiary">Contact</Button>
          </Flex>
        </Flex>
      </Navbar>

      {/* Background */}
      <Background dots={false}/>

      {/* Pricing Section */}
      <Flex
        as="section" id="pricing"
        fillWidth paddingTop="l" paddingX="l"
        direction="column" alignItems="center" flex={1}>
        
        <Heading
          variant="display-strong-m"
          color="primary">
          Our Pricing Plans
        </Heading>

        {/* Slider */}
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {pricingPlans.map((plan, index) => (
            <SwiperSlide key={index}>
              <Flex
                direction="column"
                alignItems="center"
                padding="l"
                border="neutral-weak"
                borderStyle="solid-1"
                radius="l"
                style={{
                  backdropFilter: 'blur(10px)', // Blur effect
                  backgroundColor: 'rgba(255, 255, 255, 0.1)', // Transparent white background
                  padding: '2rem',
                  borderRadius: '1rem',
                }}>
                <Heading variant="display-strong-s" color="textPrimary">
                  {plan.name}
                </Heading>
                <Text variant="display-strong-l" color="textPrimary">
                  {plan.price}
                </Text>
                <Flex direction="column" gap="s" alignItems="center">
                  {plan.features.map((feature, idx) => (
                    <Text key={idx} variant="body-default-s" color="textSecondary">
                      {feature}
                    </Text>
                  ))}
                </Flex>
                <Button variant="primary" color="primary">
                  Choose {plan.name}
                </Button>
              </Flex>
            </SwiperSlide>
          ))}
        </Swiper>
      </Flex>
    </Flex>
  );
}
