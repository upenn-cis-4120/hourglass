import Image from "next/image";
import FinancialAdvisor from "@/components/FinancialAdvisor/FinancialAdvisor";
import SideBar from "@/components/SideBar/SideBar";
import LearningCenter from "@/components/LearningCenter/LearningCenter";
import { redirect } from 'next/navigation';
// **

export default function Home() {
  // return (
  //   <div className="w-full h-full bg-zinc-800">
  //   </div>
  // );
  redirect('/dashboard');
  return null;
}
