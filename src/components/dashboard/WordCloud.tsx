"use client";
import { useTheme } from "next-themes";
import React, { useCallback } from "react";
import WordCloud from "react-d3-cloud";

interface Props {}
const data = [
    { text: "Hey", value: 1000 },
    { text: "lol", value: 200 },
    { text: "first impression", value: 800 },
    { text: "very cool", value: 1000000 },
    { text: "duck", value: 10 },
];
const CustomWordCloud = (props: Props) => {
    const theme = useTheme();

    const fontSize = (word: { value: number }) => Math.log2(word.value) * 5;
    const fill = () => {
        return theme.theme === "dark" ? "white" : "black";
    };
    // const onWordClick = useCallback((word:{value:number}) => {
    //     console.log(`onWordClick: ${word}`);
    // }, []);
    // const onWordMouseOver = useCallback((word) => {
    //     console.log(`onWordMouseOver: ${word}`);
    // }, []);
    // const onWordMouseOut = useCallback((word) => {
    //     console.log(`onWordMouseOut: ${word}`);
    // }, []);
    return (
        <WordCloud
            data={data}
            width={500}
            height={500}
            font="Times"
            fontWeight="bold"
            fontSize={(word) => Math.log2(word.value) * 5}
            spiral="rectangular"
            rotate={0}
            padding={5}
            fill={fill}
            // onWordClick={(event, d) => {
            //     console.log(`onWordClick: ${d.text}`);
            // }}
            // onWordMouseOver={(event, d) => {
            //     console.log(`onWordMouseOver: ${d.text}`);
            // }}
            // onWordMouseOut={(event, d) => {
            //     console.log(`onWordMouseOut: ${d.text}`);
            // }}
        />
    );
};

export default CustomWordCloud;
