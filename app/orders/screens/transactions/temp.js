return (
    <ListItem key={index}  >
        <View style={{flexDirection: 'row',flex:0.2, justifyContent: 'flex-start' }}>
            <CheckBox/>
        </View>    
        <Body style={{flexDirection: 'row'}}>
            <View style={{flexDirection: 'column', justifyContent: 'flex-start', flex:2}}>
                <Text style={styles.item}>{item.name}</Text>
                <Text style={styles.item} note></Text>
            </View>
            <View style={{flexDirection: 'row',flex:1.5, justifyContent: 'flex-end' }}>
                <Increment increment={()=> {this.increment(index,item.id,item.qty,item.price,item.Total)}} />
                <Text style={styles.item}>{item.qty}</Text>
                <Decrement decrement={()=>{this.decrement(index,item.id,item.qty,item.price,item.Total)}} />
            </View>
        </Body>
        <Right >
            <Text style={styles.item}>{numberThousand(item.price)}</Text>
            <Text style={styles.item} note>{numberThousand(item.qty * item.price)}</Text>
        </Right>
    </ListItem>
  )