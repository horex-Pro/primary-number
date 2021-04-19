let getUserNumber = prompt ("Enter a Number");


for (let i = 2; i <= getUserNumber ; i++) {

    if( i == 2 || i == 3 || i== 5 || i == 7 ){

        alert(i);

    }

    else if (i % 2 != 0){

        if( i % 3 != 0){

            if( i % 4 != 0){

                if( i % 5 != 0){

                    if( i % 6 != 0){

                        if( i % 7 != 0){

                            if( i % 8 != 0){

                                if( i % 9 != 0){

                                    alert(i);

                                }

                            }

                        }

                    }

                }   

            }

        }

    }   
}
