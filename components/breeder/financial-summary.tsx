"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DollarSign, TrendingUp, TrendingDown, Eye } from "lucide-react"

export function FinancialSummary() {
  const financialData = [
    {
      label: "This Month",
      amount: "$8,450",
      change: "+15%",
      trend: "up",
    },
    {
      label: "Pending Deposits",
      amount: "$2,300",
      change: "3 payments",
      trend: "neutral",
    },
    {
      label: "Expenses",
      amount: "$1,850",
      change: "-5%",
      trend: "down",
    },
  ]

  const recentTransactions = [
    { description: "Puppy deposit - Sarah J.", amount: "+$500", date: "Feb 12" },
    { description: "Vet visit - Bella", amount: "-$150", date: "Feb 10" },
    { description: "Puppy sale - Mike C.", amount: "+$1,200", date: "Feb 8" },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <DollarSign className="w-5 h-5 text-primary" />
          <span>Financial Summary</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {financialData.map((item, index) => (
          <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
            <div>
              <p className="text-sm text-muted-foreground">{item.label}</p>
              <p className="font-semibold">{item.amount}</p>
            </div>
            <div className="flex items-center space-x-1 text-sm">
              {item.trend === "up" && <TrendingUp className="w-4 h-4 text-green-600" />}
              {item.trend === "down" && <TrendingDown className="w-4 h-4 text-red-600" />}
              <span
                className={
                  item.trend === "up"
                    ? "text-green-600"
                    : item.trend === "down"
                      ? "text-red-600"
                      : "text-muted-foreground"
                }
              >
                {item.change}
              </span>
            </div>
          </div>
        ))}

        <div className="space-y-2">
          <h4 className="font-medium text-sm">Recent Transactions</h4>
          {recentTransactions.map((transaction, index) => (
            <div key={index} className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground truncate">{transaction.description}</span>
              <div className="flex items-center space-x-2">
                <span className={transaction.amount.startsWith("+") ? "text-green-600" : "text-red-600"}>
                  {transaction.amount}
                </span>
                <span className="text-xs text-muted-foreground">{transaction.date}</span>
              </div>
            </div>
          ))}
        </div>

        <Button variant="outline" className="w-full bg-transparent">
          <Eye className="w-4 h-4 mr-2" />
          View Full Report
        </Button>
      </CardContent>
    </Card>
  )
}
