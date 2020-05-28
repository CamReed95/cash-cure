UPDATE income 
SET expected = $1, actual = $2 
WHERE income_id = $3;