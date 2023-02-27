import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {FacturacionDataSource} from '../datasources';
import {Item, ItemRelations} from '../models';

export class ItemRepository extends DefaultCrudRepository<
  Item,
  typeof Item.prototype.Id,
  ItemRelations
> {
  constructor(
    @inject('datasources.facturacion') dataSource: FacturacionDataSource,
  ) {
    super(Item, dataSource);
  }
}
