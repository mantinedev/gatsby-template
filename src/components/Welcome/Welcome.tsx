import React from "react";
import { Title, Text, Anchor } from "@mantine/core";
import * as classes from "./Welcome.module.css";

export function Welcome() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        Welcome to{" "}
        <Text
          inherit
          variant="gradient"
          component="span"
          gradient={{ from: "pink", to: "yellow" }}
        >
          Mantine
        </Text>
      </Title>
      <Text color="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        This starter Gatsby project includes a minimal setup for server side
        rendering, if you want to learn more on Mantine + Gatsby integration
        follow{" "}
        <Anchor href="https://mantine.dev/guides/gatsby/" size="lg">
          this guide
        </Anchor>
        . To get started edit pages/index.tsx file.
      </Text>
    </>
  );
}
