import React from 'react';

import Row from '~/components/Row';
import { Container, Separator } from './styles';

import users from '~/data/users';

function Contacts({ navigation, route }) {
  return (
    <Container
      data={users}
      keyExtractor={(item) => {
        return `${item.id.value}-${item.phone}`;
      }}
      renderItem={({ item }) => {
        const name = `${item.name.first} ${item.name.last}`;

        return (
          <Row
            image={{ uri: item.picture.thumbnail }}
            title={name}
            subtitle={item.email}
            onPress={() => navigation.push('ContactDetails', { contact: item })}
          />
        );
      }}
      ItemSeparatorComponent={Separator}
      ListHeaderComponent={() => <Separator />}
      ListFooterComponent={() => <Separator />}
      contentContainerStyle={{ paddingVertical: 20 }}
    />
  );
}

export default Contacts;
