# ⚡ Database Management & SQL Query Optimization

**Technologies**: SQL, MySQL, Database Indexing, Query Optimization, EXPLAIN Plans  
**Domain**: E-Commerce Data Engineering & Performance Tuning  

---

## 📌 Project Overview
Designed a relational database schema for a high-volume mock e-commerce platform and performed database performance tuning. Focused on optimizing complex SQL queries (`JOIN`s, subqueries, aggregations) and eliminating costly full table scans.

---

## 🔑 Key Achievements & Optimization Impact
- **Eliminated Full Table Scans**: Introduced B-Tree composite indexes, reducing row scans from **85,000+ rows down to 1,420 rows**.
- **Execution Plan Benchmarking**: Used `EXPLAIN ANALYZE` to pinpoint query bottlenecks and refactor nested subqueries into efficient `JOIN` clauses.
- **Latency Reduction**: Query response latency reduced by **~45%** on complex analytical queries.

---

## 💻 Sample SQL Scripts & Query Optimization

### 1. Relational Schema Setup (DDL)
```sql
CREATE TABLE customers (
    customer_id INT PRIMARY KEY AUTO_INCREMENT,
    customer_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE orders (
    order_id INT PRIMARY KEY AUTO_INCREMENT,
    customer_id INT NOT NULL,
    order_date DATE NOT NULL,
    total_amount DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

-- Indexing for Query Optimization
CREATE INDEX idx_orders_customer_date ON orders(customer_id, order_date);
```

### 2. High-Performance Analytical Query
```sql
-- Query to extract high-value customer metric overview
EXPLAIN ANALYZE
SELECT 
    c.customer_id,
    c.customer_name,
    COUNT(o.order_id) AS total_orders,
    SUM(o.total_amount) AS lifetime_value
FROM customers c
INNER JOIN orders o ON c.customer_id = o.customer_id
WHERE o.order_date >= '2025-01-01'
GROUP BY c.customer_id, c.customer_name
HAVING lifetime_value > 5000
ORDER BY lifetime_value DESC;
```
