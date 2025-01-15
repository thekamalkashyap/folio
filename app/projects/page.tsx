"use client";
import React from "react";
import StickyScroll from "@/components/stickyScrollReveal";

const content = [
  {
    title: "The Xiting Way",
    description:
      "Welcome to The Xiting Way, where our passion lies in driving technology forward in the 21st century. Our mission is to infuse excitement into every aspect of technology, achieved through our innovative and creative software solutions that excites the world.",
    url: "https://www.thexitingway.com/",
    imageSrc: "/preview/xiting.png",
  },
  {
    title: "Mrotion",
    description:
      "Mrotion is a service and branding studio dedicated to creating innovative digital products and services for the world's leading brands. Our mission is to assist these brands in crafting their dreams.",
    url: "https://mrotion.com/",
    imageSrc: "/preview/mrotion.png",
  },
  {
    title: "DevXClub",
    description:
      "Turn your ideas into reality by joining a vibrant community of developers and designers. Here, you can collaborate, learn, build, and grow together, transforming your creative visions into tangible achievements.",
    url: "https://devxclub.vercel.app/",
    imageSrc: "/preview/devxclub.png",
  },
  {
    title: "create-devx",
    description:
      "With ‘𝐧𝐩𝐱 𝐜𝐫𝐞𝐚𝐭𝐞-𝐝𝐞𝐯𝐱’, you can jumpstart your next project in a flash. Whether you're a seasoned pro or just starting out, our tool takes care of all the heavy lifting, setting up everything you need from logger to file compression and beyond!",
    url: "https://www.npmjs.com/package/create-devx",
    imageSrc: "/preview/devx.png",
  },
  {
    title: "Techipedia",
    description:
      "This is a Next.js, Tailwind CSS blogging starter template. Comes out of the box configured with the latest technologies to make technical writing a breeze. Easily configurable and customizable. Perfect as a replacement to existing Jekyll and Hugo individual blogs. ",
    url: "https://techipedia.vercel.app/",
    imageSrc: "/preview/techipedia.png",
  },
  {
    title: "Bookverse",
    description:
      "Bookverse is an innovative platform designed for book lovers to connect, share their thoughts, and review the books they've read. It's a vibrant community where you can discover new books, delve into insightful reviews, and contribute your own perspectives.",
    url: "https://bookvrc.vercel.app/",
    imageSrc: "/preview/bookverse.png",
  },
  {
    title: "ytsr",
    description:
      "ytsr is a command-line tool to search and play youtube videos directly from the terminal. Search youtube for anything from the comfort of your terminal with this perl script. It uses invidious instance to fetch youtube search results.",
    url: "https://github.com/thekamalkashyap/ytsr/blob/main/ytsr",
    imageSrc: "/preview/ytsr.png",
  },
  {
    title: "Threejs game",
    description:
      "A Three.js game where you can control a sphere. The game is built using Three.js and rapier.js for physics to understand how physics works in Three.js. It Provides an engaging way to understand and experiment with physics concepts in a 3D space.",
    url: "https://react-three-physics.vercel.app/",
    imageSrc: "/preview/threejs-game.png",
  },
  {
    title: "rddt",
    description:
      "A shell script to scrape reddit posts from a subreddit and display them in a terminal. It uses the reddit API to fetch posts from a subreddit and displays them in a terminal. It convert image to ascii (sixel) display it in terminal.",
    url: "https://github.com/thekamalkashyap/rddt/blob/main/rddt",
    imageSrc: "/preview/rddt.png",
  },
];

export default function Projects() {
  return <StickyScroll content={content} />;
}
