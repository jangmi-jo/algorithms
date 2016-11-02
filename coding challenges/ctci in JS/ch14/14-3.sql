UPDATE Requests
FROM Requests LEFT JOIN Apartments ON Apartments.AptID = Requests.AptID
              LEFT JOIN Buildings ON Buildings.BuildingID = Apartments.BuildingID
SET status = 'Close'
WHERE Buildings.BuildingID = 11
