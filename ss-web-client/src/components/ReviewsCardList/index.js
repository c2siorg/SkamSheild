import React, { useContext } from "react";
import { Grid, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import CustomCard from "../../ui/CustomCard/CustomCard";

import { AuthContext } from "../../context/AuthContext/AuthContext";

export default function ReviewsCardList() {
  const { role, profile, userPayments, updateUser } = useContext(AuthContext);

  const scamTypes = [
    {
      id: "1",
      title: "Phishing",
      day: "Monday",
      image: "https://via.placeholder.com/150",
      startTime: "10:00 AM",
      endTime: "12:00 PM",
      description:
        "Learn about phishing scams where emails appear to be from reputable sources, attempting to steal personal information such as passwords, credit card numbers, or other sensitive data.",
    },
    {
      id: "2",
      title: "Advance-Fee Fraud",
      day: "Wednesday",
      image: "https://via.placeholder.com/150",
      startTime: "2:00 PM",
      endTime: "4:00 PM",
      description:
        "Understand advance-fee fraud, where emails promise large sums of money in return for a small upfront fee, commonly known as the Nigerian Prince scam.",
    },
    {
      id: "3",
      title: "Lottery Scams",
      day: "Friday",
      image: "https://via.placeholder.com/150",
      startTime: "9:00 AM",
      endTime: "11:00 AM",
      description:
        "Explore lottery scams that notify recipients of winning a lottery they never entered, requesting personal details to claim the prize.",
    },
    {
      id: "4",
      title: "Work-From-Home Scams",
      day: "Tuesday",
      image: "https://via.placeholder.com/150",
      startTime: "1:00 PM",
      endTime: "3:00 PM",
      description:
        "Discover work-from-home scams that promise high income from home-based jobs, often requiring an upfront fee for materials or training.",
    },
    {
      id: "5",
      title: "Invoice Scams",
      day: "Thursday",
      image: "https://via.placeholder.com/150",
      startTime: "4:00 PM",
      endTime: "6:00 PM",
      description:
        "Identify invoice scams targeting businesses with fake invoices for products or services that were never ordered.",
    },
    {
      id: "6",
      title: "Robocalls",
      day: "Monday",
      image: "https://via.placeholder.com/150",
      startTime: "10:00 AM",
      endTime: "12:00 PM",
      description:
        "Learn about robocalls, automated calls providing fraudulent information or seeking to extract personal details.",
    },
    {
      id: "7",
      title: "Tech Support Scams",
      day: "Wednesday",
      image: "https://via.placeholder.com/150",
      startTime: "2:00 PM",
      endTime: "4:00 PM",
      description:
        "Understand tech support scams where calls claim there is a problem with the recipient's computer that needs immediate attention.",
    },
    {
      id: "8",
      title: "IRS/Tax Scams",
      day: "Friday",
      image: "https://via.placeholder.com/150",
      startTime: "9:00 AM",
      endTime: "11:00 AM",
      description:
        "Explore IRS/tax scams where calls claim to be from the IRS or tax authorities, threatening arrest or legal action if a supposed unpaid tax bill isn't settled immediately.",
    },
    {
      id: "9",
      title: "Warranty Scams",
      day: "Tuesday",
      image: "https://via.placeholder.com/150",
      startTime: "1:00 PM",
      endTime: "3:00 PM",
      description:
        "Discover warranty scams where calls claim that a car or home warranty is about to expire, pressuring the recipient to purchase an extended warranty.",
    },
    {
      id: "10",
      title: "Fake Websites",
      day: "Thursday",
      image: "https://via.placeholder.com/150",
      startTime: "4:00 PM",
      endTime: "6:00 PM",
      description:
        "Identify fake websites that mimic legitimate businesses to steal personal or financial information.",
    },
    {
      id: "11",
      title: "Social Media Scams",
      day: "Monday",
      image: "https://via.placeholder.com/150",
      startTime: "10:00 AM",
      endTime: "12:00 PM",
      description:
        "Learn about social media scams involving fraudulent links or messages on social media platforms leading to phishing sites or malware downloads.",
    },
    {
      id: "12",
      title: "Romance Scams",
      day: "Wednesday",
      image: "https://via.placeholder.com/150",
      startTime: "2:00 PM",
      endTime: "4:00 PM",
      description:
        "Understand romance scams with fake profiles on dating sites that develop relationships to extract money from victims.",
    },
    {
      id: "13",
      title: "Investment Scams",
      day: "Friday",
      image: "https://via.placeholder.com/150",
      startTime: "9:00 AM",
      endTime: "11:00 AM",
      description:
        "Explore investment scams that offer high returns with little risk, often involving cryptocurrencies or other speculative investments.",
    },
    {
      id: "14",
      title: "Smishing",
      day: "Tuesday",
      image: "https://via.placeholder.com/150",
      startTime: "1:00 PM",
      endTime: "3:00 PM",
      description:
        "Discover smishing, phishing attacks conducted via SMS, attempting to lure recipients into divulging personal information.",
    },
    {
      id: "15",
      title: "Fake Alerts",
      day: "Thursday",
      image: "https://via.placeholder.com/150",
      startTime: "4:00 PM",
      endTime: "6:00 PM",
      description:
        "Identify fake alerts where messages claim to be from banks, delivery services, or other organizations, asking for personal information or account verification.",
    },
    {
      id: "16",
      title: "Lottery or Sweepstakes Scams",
      day: "Monday",
      image: "https://via.placeholder.com/150",
      startTime: "10:00 AM",
      endTime: "12:00 PM",
      description:
        "Learn about lottery or sweepstakes scams that claim the recipient has won a lottery or sweepstakes they never entered, asking for a fee to release the winnings.",
    },
    {
      id: "17",
      title: "Charity Scams",
      day: "Wednesday",
      image: "https://via.placeholder.com/150",
      startTime: "2:00 PM",
      endTime: "4:00 PM",
      description:
        "Understand charity scams involving fake charity requests for donations, especially following natural disasters or major events.",
    },
    {
      id: "18",
      title: "Pretexting",
      day: "Friday",
      image: "https://via.placeholder.com/150",
      startTime: "9:00 AM",
      endTime: "11:00 AM",
      description:
        "Explore pretexting where the scammer pretends to need information to confirm the identity of the person they are targeting.",
    },
    {
      id: "19",
      title: "Baiting",
      day: "Tuesday",
      image: "https://via.placeholder.com/150",
      startTime: "1:00 PM",
      endTime: "3:00 PM",
      description:
        "Discover baiting scams offering something enticing (e.g., free music or movie downloads) to lure victims into a trap.",
    },
    {
      id: "20",
      title: "Fake Job Offers",
      day: "Thursday",
      image: "https://via.placeholder.com/150",
      startTime: "4:00 PM",
      endTime: "6:00 PM",
      description:
        "Identify fake job offers that promise employment but require personal information or upfront payment for training or equipment.",
    },
    {
      id: "21",
      title: "Reshipping Scams",
      image: "https://via.placeholder.com/150",
      count: 2,
      description:
        "Learn about reshipping scams where victims are asked to receive, repackage, and ship goods, often bought with stolen credit cards.",
    },
    {
      id: "22",
      title: "Ponzi Schemes",
      image: "https://via.placeholder.com/150",
      count: 8,
      description:
        "Understand Ponzi schemes, investment scams promising high returns with little risk, where returns are paid to earlier investors from new investors' money.",
    },
    {
      id: "23",
      title: "Pyramid Schemes",
      image: "https://via.placeholder.com/150",
      count: 7,
      description:
        "Explore pyramid schemes that require participants to recruit others in order to receive payments.",
    },
  ];

  return (
    <>
      {scamTypes &&
        scamTypes.map(({ id, title, image, description }, index) => (
          <Grid key={index} item xs={12} md={4} lg={4}>
            <CustomCard
              title={title}
              // subheader={'lorem ipsum'}
              description={description}
              image={image}
            >
              <Link
                to={{
                  pathname: `/main/review-content/${id}/`,
                  state: { params: { review: id } },
                }}
                style={{ textDecoration: "none" }}
              >
                <Button
                  startIcon={<ArrowForwardIcon />}
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  Go
                </Button>
              </Link>
            </CustomCard>
          </Grid>
        ))}
    </>
  );
}
