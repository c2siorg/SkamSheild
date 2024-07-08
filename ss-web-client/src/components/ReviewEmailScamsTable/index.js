import React, { useContext, useEffect, useState } from "react";
import { styled } from "@mui/system";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import DataTable from "../../ui/DataTable/DataTable";
import SelectMenu from "../../ui/SelectMenu/SelectMenu";
import Button from "@mui/material/Button";
import SearchBar from "../../ui/SearchBar/SearchBar";
import { Years } from "../../constants/Years";
import { Months } from "../../constants/Months";
import { ScamDataContext } from "../../context/ScamDataContext/ScamDataContext";
import { Dates } from "../../constants/Dates";
import { Checkbox } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  height: "100%",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
}));

export default function ReviewEmailScamsTable() {
  const today = new Date();

  const [selectedYear, setSelectedYear] = useState(today.getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(today.getMonth());
  const [selectedDate, setSelectedDate] = useState(today.getDate());
  const [selectedScamData, setSelectedScamData] = useState(null);

  const scamData = [
    {
      id: 1,
      title: "Phishing",
      desc: "Emails that appear to be from reputable sources",
      content:
        "These emails attempt to steal personal information such as passwords, credit card numbers, or other sensitive data.",
    },
    {
      id: 2,
      title: "Advance-Fee Fraud",
      desc: "Emails promising large sums of money in return for a small upfront fee",
      content:
        "Also known as the Nigerian Prince scam, these emails promise large sums of money in return for a small upfront fee.",
    },
    {
      id: 3,
      title: "Lottery Scams",
      desc: "Notifications claiming the recipient has won a lottery",
      content:
        "These emails claim the recipient has won a large sum of money in a lottery they never entered, requesting personal details to claim the prize.",
    },
    {
      id: 4,
      title: "Work-From-Home Scams",
      desc: "Promises of high income from home-based jobs",
      content:
        "These scams often require an upfront fee for materials or training and promise high income from home-based jobs.",
    },
    {
      id: 5,
      title: "Invoice Scams",
      desc: "Fake invoices for products or services",
      content:
        "These scams target businesses with fake invoices for products or services that were never ordered.",
    },
    {
      id: 6,
      title: "Robocalls",
      desc: "Automated calls providing fraudulent information",
      content:
        "These automated calls often provide fraudulent information or seek to extract personal details.",
    },
    {
      id: 7,
      title: "Tech Support Scams",
      desc: "Calls claiming to be from tech support",
      content:
        "These calls claim there is a problem with the recipient's computer that needs immediate attention.",
    },
    {
      id: 8,
      title: "IRS/Tax Scams",
      desc: "Calls claiming to be from the IRS or tax authorities",
      content:
        "These calls threaten arrest or legal action if a supposed unpaid tax bill isn't settled immediately.",
    },
    {
      id: 9,
      title: "Warranty Scams",
      desc: "Calls about expiring warranties",
      content:
        "These calls claim that a car or home warranty is about to expire, pressuring the recipient to purchase an extended warranty.",
    },
    {
      id: 10,
      title: "Fake Websites",
      desc: "Websites mimicking legitimate businesses",
      content:
        "These websites are designed to steal personal or financial information.",
    },
    {
      id: 11,
      title: "Social Media Scams",
      desc: "Fraudulent links or messages on social media",
      content:
        "These scams involve links or messages on social media platforms leading to phishing sites or malware downloads.",
    },
    {
      id: 12,
      title: "Romance Scams",
      desc: "Fake profiles on dating sites",
      content:
        "These scams develop relationships to extract money from victims.",
    },
    {
      id: 13,
      title: "Investment Scams",
      desc: "Offers of high returns with little risk",
      content:
        "These scams often involve cryptocurrencies or other speculative investments.",
    },
    {
      id: 14,
      title: "Smishing",
      desc: "Phishing attacks via SMS",
      content:
        "These SMS attacks attempt to lure recipients into divulging personal information.",
    },
    {
      id: 15,
      title: "Fake Alerts",
      desc: "Messages from banks or other organizations",
      content:
        "These messages claim to be from banks, delivery services, or other organizations, asking for personal information or account verification.",
    },
    {
      id: 16,
      title: "Lottery or Sweepstakes Scams",
      desc: "Letters claiming a lottery win",
      content:
        "These letters claim the recipient has won a lottery or sweepstakes they never entered, asking for a fee to release the winnings.",
    },
    {
      id: 17,
      title: "Charity Scams",
      desc: "Fake charity requests for donations",
      content:
        "These scams involve fake charity requests for donations, especially following natural disasters or major events.",
    },
    {
      id: 18,
      title: "Pretexting",
      desc: "Scammer pretends to need information",
      content:
        "These scams involve the scammer pretending to need information to confirm the identity of the person they are targeting.",
    },
    {
      id: 19,
      title: "Baiting",
      desc: "Offering something enticing to lure victims",
      content:
        "These scams offer something enticing (e.g., free music or movie downloads) to lure victims into a trap.",
    },
    {
      id: 20,
      title: "Fake Job Offers",
      desc: "Promises of employment requiring personal information",
      content:
        "These scams promise employment that requires personal information or upfront payment for training or equipment.",
    },
    {
      id: 21,
      title: "Reshipping Scams",
      desc: "Receiving, repackaging, and shipping goods",
      content:
        "These scams involve receiving, repackaging, and shipping goods, often bought with stolen credit cards.",
    },
    {
      id: 22,
      title: "Ponzi Schemes",
      desc: "Investment scams with high returns",
      content:
        "These scams promise high returns with little risk, where returns are paid to earlier investors from new investors' money.",
    },
    {
      id: 23,
      title: "Pyramid Schemes",
      desc: "Requiring participants to recruit others",
      content:
        "These scams require participants to recruit others in order to receive payments.",
    },
  ];

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4} lg={4}>
          <StyledPaper>
            <SelectMenu
              data={Years.map((val) => ({ value: val, label: val.toString() }))}
              label="Select Year"
              width={"100%"}
              value={selectedYear}
              fullWidth={true}
              onChange={(e) => {
                setSelectedYear(e.target.value);
              }}
            />
          </StyledPaper>
        </Grid>

        <Grid item xs={12} md={4} lg={4}>
          <StyledPaper>
            <SelectMenu
              data={Months.map((val, index) => ({
                value: index + 1,
                label: val,
              }))}
              label="Select Month"
              width={"100%"}
              value={selectedMonth}
              fullWidth={true}
              onChange={(e) => {
                setSelectedMonth(e.target.value);
              }}
            />
          </StyledPaper>
        </Grid>

        <Grid item xs={12} md={4} lg={4}>
          <StyledPaper>
            <SelectMenu
              data={Dates.map((val, index) => ({
                value: index + 1,
                label: val,
              }))}
              label="Select Date"
              width={"100%"}
              value={1}
              fullWidth={true}
              onChange={(e) => {
                setSelectedMonth(e.target.value);
              }}
            />
          </StyledPaper>
        </Grid>

        <Grid item xs={12} md={12} lg={12}>
          <DataTable
            columns={[
              { title: "ID", field: "id" },
              { title: "Title", field: "title" },
              { title: "Type", field: "type" },
              { title: "Description", field: "desc" },
              { title: "Content", field: "content" },
            ]}
            rows={scamData}
            editables={[
              {
                icon: AddIcon,
                label: "Submit Review",
                onClick: (event, rowData) => console.log(rowData),
              },
            ]}
            actions={[
              {
                icon: CheckIcon,
                label: "Present",
                onClick: (event, rowData) => console.log(rowData),
              },
              {
                icon: ClearIcon,
                label: "Absent",
                onClick: (event, rowData) => console.log(rowData),
              },
            ]}
            checkboxSelection={true}
          />
        </Grid>
      </Grid>
    </>
  );
}
