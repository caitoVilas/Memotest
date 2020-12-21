

        for(let x = 0; x < 18; x++){
            const $card = d.createElement('div');
            $card.classList.add('card','col-12','col-sm-3','col-md-2','carta');
            $card.setAttribute('id',`id-${x}`);
            let imgUrl = cartasFrente[x]+'.png';
            const $img = d.createElement('img');
            $img.setAttribute('id',`img-${x}`);
            imgCard.push(imgUrl);
            $img.setAttribute('data-card','back');
            $img.src = `../assets/img/carta_reverse.png`;
            $card.insertAdjacentElement('afterbegin',$img);
            $tablero.insertAdjacentElement('afterbegin',$card);
        }