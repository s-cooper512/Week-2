PROCEDURE MakeSandwich()

SET BREAD
SET CONTENTS ARRAY
SET SANDWICH ARRAY

IF SANDWICH ARRAY DOES NOT BEGIN WITH BREAD
    ADD BREAD TO FIRST POSITION IN ARRAY
END IF

WHILE SANDWISH DOES NOT CONTAIN ALL CONTENTS
    ADD NEXT ITEM IN CONTENTS ARRAY TO SANDWICH
    DETERMINE IF ALL CONTENTS HAVE BEEN ADDED
END WHILE

IF SANDWICH DOES NOT CONTAIN BREAD IN FINAL POSITION
    ADD BREAD TO FINAL POSITION IN SANDWICH
END IF

RETURN SANDWICH ARRAY

ENDPROCEDURE