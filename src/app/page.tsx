"use client";

import React from 'react';
import { Heading, Text, Flex, Button, Grid, Background, useTheme } from '@/once-ui/components';

export default function Pricing() {
  const { theme } = useTheme();

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
      fillWidth paddingTop={theme.spacing.l} paddingX={theme.spacing.l}
      direction="column" alignItems="center" flex={1}>
      <Background dots={false}/>
      <Flex
        position="relative"
        as="section" overflow="hidden"
        fillWidth minHeight="0" maxWidth={68}
        direction="column" alignItems="center" flex={1}>
        <Heading
          variant="display-strong-m"
          color={theme.colors.primary}>
          Our Pricing Plans
        </Heading>
        <Grid
          radius={theme.radii.l}
          border={theme.borders.neutralMedium}
          borderStyle="solid-1"
          columns="repeat(3, 1fr)"
          tabletColumns="1col"
          mobileColumns="1col"
          fillWidth gap={theme.spacing.l}
          paddingY={theme.spacing.l}>
          {pricingPlans.map((plan, index) => (
            <Flex
              key={index}
              direction="column"
              alignItems="center"
              padding={theme.spacing.l}
              border={theme.borders.neutralWeak}
              borderStyle="solid-1"
              radius={theme.radii.l}>
              <Heading variant="title-strong-s" color={theme.colors.textPrimary}>
                {plan.name}
              </Heading>
              <Text variant="display-strong-l" color={theme.colors.textPrimary}>
                {plan.price}
              </Text>
              <Flex direction="column" gap={theme.spacing.s} alignItems="center">
                {plan.features.map((feature, idx) => (
                  <Text key={idx} variant="body-default-s" color={theme.colors.textSecondary}>
                    {feature}
                  </Text>
                ))}
              </Flex>
              <Button variant="primary" color={theme.colors.primary}>
                Choose {plan.name}
              </Button>
            </Flex>
          ))}
        </Grid>
      </Flex>
    </Flex>
  );
}
