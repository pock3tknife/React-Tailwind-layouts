import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";
import Sidebar from "./sidebar";

import { Link } from "react-router-dom";
import DashboardStatsGrid from "./DashboardStatsGrid";
import TransactionChart from "./TransactionChart";
import BuyerProfilePieChart from "./BuyerProfilePieChart";
import RecentOrders from "./RecentOrders";
import PopularProducts from "./PopularProducts";

export function FixedSidebar() {
  return (
    <>
      <section className="relative block h-[50vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-1.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
      </section>
      <div className="flex h-screen w-screen flex-row overflow-hidden">
        <Sidebar />
        <div className="flex-1">
          <div className="p-4">
            <div className="flex flex-col">
              <DashboardStatsGrid />
              <div className="flex w-full flex-row gap-4">
                <TransactionChart />
                <BuyerProfilePieChart />
              </div>
              <div className="flex w-full flex-row gap-4">
                <RecentOrders />
                <PopularProducts />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default FixedSidebar;
