SELECT BuildingName, COUNT(*)
FROM Buildings LEFT JOIN Apartments ON Buildings.BuildingID = Apartments.BuildingID
               LEFT JOIN Requests ON Apartments.AptID = Requests.AptID
WHERE Requests.Status = 'Open'
GROUP BY BuildingName
