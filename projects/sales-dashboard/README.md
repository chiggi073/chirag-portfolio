# 📊 Sales Performance Dashboard

**Technologies**: Power BI, DAX, Power Query, Microsoft Excel  
**Domain**: Retail Sales Analytics & Business Intelligence  

---

## 📌 Project Overview
An interactive Business Intelligence solution built in **Power BI** to analyze sales transaction datasets across multiple regions and product categories. The dashboard delivers executive-level visibility into key performance indicators (KPIs), seasonal purchasing trends, and year-over-year growth metrics.

---

## 🔑 Key Features & Deliverables
- **Interactive KPI Cards**: Real-time metrics for Total Revenue, Gross Profit Margin, Total Orders, and Average Order Value (AOV).
- **DAX Time Intelligence**: Calculated YoY sales growth comparing current performance against prior period performance.
- **Customer Segmentation**: Analyzed purchasing behavior by customer demography and repeat order frequency.
- **Underperforming Category Identification**: Highlighted product lines with declining sales margins, leading to actionable business strategy recommendations.

---

## 📐 Key DAX Measures Calculated

```dax
// 1. Total Revenue
Total Revenue = SUM(Sales_Data[Sales_Amount])

// 2. Year-over-Year (YoY) Revenue Growth %
YoY Sales Growth % = 
VAR CurrentYearSales = [Total Revenue]
VAR PriorYearSales = CALCULATE([Total Revenue], SAMEPERIODLASTYEAR('Calendar'[Date]))
RETURN 
    DIVIDE(CurrentYearSales - PriorYearSales, PriorYearSales, 0)

// 3. Gross Profit Margin %
Gross Profit Margin % = 
DIVIDE(SUM(Sales_Data[Profit]), [Total Revenue], 0)
```

---

## 📊 Data Preprocessing (Power Query)
- Extracted raw transaction logs from CSV/Excel sources.
- Handled missing values, standardized data types (Date, Currency, Text).
- Established a clean Star Schema data model linking Fact tables to Dimension tables (`Dim_Customer`, `Dim_Product`, `Dim_Date`).
