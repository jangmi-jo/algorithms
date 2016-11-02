SELECT TenantName
FROM Tenants LEFT JOIN AptTenants
ON Tenants.TenantID = TenantApartments.TenantID
GROUP BY TenantName
HAVING COUNT(*) > 1
