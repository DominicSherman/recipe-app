import { GraphQLDateTime } from 'graphql-iso-date';
import { asNexusMethod, enumType, inputObjectType } from 'nexus';

export const DateTime = asNexusMethod(GraphQLDateTime, 'date');
export const DateTimeFieldUpdateOperationsInput = inputObjectType({
  name: 'DateTimeFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: DateTime });
  },
});
export const DateTimeFilter = inputObjectType({
  name: 'DateTimeFilter',
  definition(t) {
    t.field('equals', { type: DateTime });
    t.field('gt', { type: DateTime });
    t.field('gte', { type: DateTime });
    t.list.nonNull.field('in', { type: DateTime });
    t.field('lt', { type: DateTime });
    t.field('lte', { type: DateTime });
    t.field('not', { type: NestedDateTimeFilter });
    t.list.nonNull.field('notIn', { type: DateTime });
  },
});
export const DateTimeNullableFilter = inputObjectType({
  name: 'DateTimeNullableFilter',
  definition(t) {
    t.field('equals', { type: DateTime });
    t.field('gt', { type: DateTime });
    t.field('gte', { type: DateTime });
    t.list.nonNull.field('in', { type: DateTime });
    t.field('lt', { type: DateTime });
    t.field('lte', { type: DateTime });
    t.field('not', { type: NestedDateTimeNullableFilter });
    t.list.nonNull.field('notIn', { type: DateTime });
  },
});
export const IntFilter = inputObjectType({
  name: 'IntFilter',
  definition(t) {
    t.int('equals');
    t.int('gt');
    t.int('gte');
    t.list.nonNull.int('in');
    t.int('lt');
    t.int('lte');
    t.field('not', { type: NestedIntFilter });
    t.list.nonNull.int('notIn');
  },
});
export const NestedDateTimeFilter = inputObjectType({
  name: 'NestedDateTimeFilter',
  definition(t) {
    t.field('equals', { type: DateTime });
    t.field('gt', { type: DateTime });
    t.field('gte', { type: DateTime });
    t.list.nonNull.field('in', { type: DateTime });
    t.field('lt', { type: DateTime });
    t.field('lte', { type: DateTime });
    t.field('not', { type: NestedDateTimeFilter });
    t.list.nonNull.field('notIn', { type: DateTime });
  },
});
export const NestedDateTimeNullableFilter = inputObjectType({
  name: 'NestedDateTimeNullableFilter',
  definition(t) {
    t.field('equals', { type: DateTime });
    t.field('gt', { type: DateTime });
    t.field('gte', { type: DateTime });
    t.list.nonNull.field('in', { type: DateTime });
    t.field('lt', { type: DateTime });
    t.field('lte', { type: DateTime });
    t.field('not', { type: NestedDateTimeNullableFilter });
    t.list.nonNull.field('notIn', { type: DateTime });
  },
});
export const NestedIntFilter = inputObjectType({
  name: 'NestedIntFilter',
  definition(t) {
    t.int('equals');
    t.int('gt');
    t.int('gte');
    t.list.nonNull.int('in');
    t.int('lt');
    t.int('lte');
    t.field('not', { type: NestedIntFilter });
    t.list.nonNull.int('notIn');
  },
});
export const NestedStringFilter = inputObjectType({
  name: 'NestedStringFilter',
  definition(t) {
    t.string('contains');
    t.string('endsWith');
    t.string('equals');
    t.string('gt');
    t.string('gte');
    t.list.nonNull.string('in');
    t.string('lt');
    t.string('lte');
    t.field('not', { type: NestedStringFilter });
    t.list.nonNull.string('notIn');
    t.string('startsWith');
  },
});
export const NestedStringNullableFilter = inputObjectType({
  name: 'NestedStringNullableFilter',
  definition(t) {
    t.string('contains');
    t.string('endsWith');
    t.string('equals');
    t.string('gt');
    t.string('gte');
    t.list.nonNull.string('in');
    t.string('lt');
    t.string('lte');
    t.field('not', { type: NestedStringNullableFilter });
    t.list.nonNull.string('notIn');
    t.string('startsWith');
  },
});
export const NullableDateTimeFieldUpdateOperationsInput = inputObjectType({
  name: 'NullableDateTimeFieldUpdateOperationsInput',
  definition(t) {
    t.field('set', { type: DateTime });
  },
});
export const NullableStringFieldUpdateOperationsInput = inputObjectType({
  name: 'NullableStringFieldUpdateOperationsInput',
  definition(t) {
    t.string('set');
  },
});
const StringFieldUpdateOperationsInput = inputObjectType({
  name: 'StringFieldUpdateOperationsInput',
  definition(t) {
    t.string('set');
  },
});
export const StringFilter = inputObjectType({
  name: 'StringFilter',
  definition(t) {
    t.string('contains');
    t.string('endsWith');
    t.string('equals');
    t.string('gt');
    t.string('gte');
    t.list.nonNull.string('in');
    t.string('lt');
    t.string('lte');
    t.field('mode', { type: QueryMode });
    t.field('not', { type: NestedStringFilter });
    t.list.nonNull.string('notIn');
    t.string('startsWith');
  },
});
export const StringNullableFilter = inputObjectType({
  name: 'StringNullableFilter',
  definition(t) {
    t.string('contains');
    t.string('endsWith');
    t.string('equals');
    t.string('gt');
    t.string('gte');
    t.list.nonNull.string('in');
    t.string('lt');
    t.string('lte');
    t.field('mode', { type: QueryMode });
    t.field('not', { type: NestedStringNullableFilter });
    t.list.nonNull.string('notIn');
    t.string('startsWith');
  },
});
export const UserCreateNestedOneWithoutRecipesInput = inputObjectType({
  name: 'UserCreateNestedOneWithoutRecipesInput',
  definition(t) {
    t.field('connect', { type: UserWhereUniqueInput });
    t.field('connectOrCreate', {
      type: UserCreateOrConnectWithoutRecipesInput,
    });

    t.field('create', { type: UserCreateWithoutRecipesInput });
  },
});
export const UserCreateOrConnectWithoutRecipesInput = inputObjectType({
  name: 'UserCreateOrConnectWithoutRecipesInput',
  definition(t) {
    t.nonNull.field('create', { type: UserCreateWithoutRecipesInput });
    t.nonNull.field('where', { type: UserWhereUniqueInput });
  },
});
export const UserCreateWithoutRecipesInput = inputObjectType({
  name: 'UserCreateWithoutRecipesInput',
  definition(t) {
    t.field('createdAt', { type: DateTime });
    t.string('email');
    t.field('emailVerified', { type: DateTime });
    t.string('image');
    t.string('name');
    t.field('updatedAt', { type: DateTime });
  },
});
export const UserOrderByInput = inputObjectType({
  name: 'UserOrderByInput',
  definition(t) {
    t.field('createdAt', { type: SortOrder });
    t.field('email', { type: SortOrder });
    t.field('emailVerified', { type: SortOrder });
    t.field('id', { type: SortOrder });
    t.field('image', { type: SortOrder });
    t.field('name', { type: SortOrder });
    t.field('updatedAt', { type: SortOrder });
  },
});
export const UserUpdateOneRequiredWithoutRecipesInput = inputObjectType({
  name: 'UserUpdateOneRequiredWithoutRecipesInput',
  definition(t) {
    t.field('connect', { type: UserWhereUniqueInput });
    t.field('connectOrCreate', {
      type: UserCreateOrConnectWithoutRecipesInput,
    });

    t.field('create', { type: UserCreateWithoutRecipesInput });
    t.field('update', { type: UserUpdateWithoutRecipesInput });
    t.field('upsert', { type: UserUpsertWithoutRecipesInput });
  },
});
export const UserUpdateWithoutRecipesInput = inputObjectType({
  name: 'UserUpdateWithoutRecipesInput',
  definition(t) {
    t.field('createdAt', { type: DateTimeFieldUpdateOperationsInput });
    t.field('email', { type: NullableStringFieldUpdateOperationsInput });
    t.field('emailVerified', {
      type: NullableDateTimeFieldUpdateOperationsInput,
    });

    t.field('image', { type: NullableStringFieldUpdateOperationsInput });
    t.field('name', { type: NullableStringFieldUpdateOperationsInput });
    t.field('updatedAt', { type: DateTimeFieldUpdateOperationsInput });
  },
});
export const UserUpsertWithoutRecipesInput = inputObjectType({
  name: 'UserUpsertWithoutRecipesInput',
  definition(t) {
    t.nonNull.field('create', { type: UserCreateWithoutRecipesInput });
    t.nonNull.field('update', { type: UserUpdateWithoutRecipesInput });
  },
});
export const UserWhereInput = inputObjectType({
  name: 'UserWhereInput',
  definition(t) {
    t.list.nonNull.field('AND', { type: UserWhereInput });
    t.list.nonNull.field('NOT', { type: UserWhereInput });
    t.list.nonNull.field('OR', { type: UserWhereInput });
    t.field('Recipes', { type: RecipeListRelationFilter });
    t.field('createdAt', { type: DateTimeFilter });
    t.field('email', { type: StringNullableFilter });
    t.field('emailVerified', { type: DateTimeNullableFilter });
    t.field('id', { type: IntFilter });
    t.field('image', { type: StringNullableFilter });
    t.field('name', { type: StringNullableFilter });
    t.field('updatedAt', { type: DateTimeFilter });
  },
});
export const UserWhereUniqueInput = inputObjectType({
  name: 'UserWhereUniqueInput',
  definition(t) {
    t.string('email');
    t.int('id');
  },
});
export const RecipeCreateInput = inputObjectType({
  name: 'RecipeCreateInput',
  definition(t) {
    t.string('cookTime');
    t.field('createdAt', { type: DateTime });
    t.string('description');
    t.string('headerImageUrl');
    t.string('id');
    t.string('serveCount');
    t.string('text');
    t.nonNull.string('title');
    t.field('updatedAt', { type: DateTime });
    t.nonNull.int('userId');
  },
});
export const RecipeListRelationFilter = inputObjectType({
  name: 'RecipeListRelationFilter',
  definition(t) {
    t.field('every', { type: RecipeWhereInput });
    t.field('none', { type: RecipeWhereInput });
    t.field('some', { type: RecipeWhereInput });
  },
});
export const RecipeOrderByInput = inputObjectType({
  name: 'RecipeOrderByInput',
  definition(t) {
    t.field('cookTime', { type: SortOrder });
    t.field('createdAt', { type: SortOrder });
    t.field('description', { type: SortOrder });
    t.field('headerImageUrl', { type: SortOrder });
    t.field('id', { type: SortOrder });
    t.field('serveCount', { type: SortOrder });
    t.field('text', { type: SortOrder });
    t.field('title', { type: SortOrder });
    t.field('updatedAt', { type: SortOrder });
    t.field('userId', { type: SortOrder });
  },
});
export const RecipeUpdateInput = inputObjectType({
  name: 'RecipeUpdateInput',
  definition(t) {
    t.field('cookTime', { type: NullableStringFieldUpdateOperationsInput });
    t.field('createdAt', { type: DateTimeFieldUpdateOperationsInput });
    t.field('description', { type: NullableStringFieldUpdateOperationsInput });
    t.field('headerImageUrl', {
      type: NullableStringFieldUpdateOperationsInput,
    });

    t.field('id', { type: StringFieldUpdateOperationsInput });
    t.field('serveCount', { type: NullableStringFieldUpdateOperationsInput });
    t.field('text', { type: NullableStringFieldUpdateOperationsInput });
    t.field('title', { type: StringFieldUpdateOperationsInput });
    t.field('updatedAt', { type: DateTimeFieldUpdateOperationsInput });
  },
});
export const RecipeWhereInput = inputObjectType({
  name: 'RecipeWhereInput',
  definition(t) {
    t.list.nonNull.field('AND', { type: RecipeWhereInput });
    t.list.nonNull.field('NOT', { type: RecipeWhereInput });
    t.list.nonNull.field('OR', { type: RecipeWhereInput });
    t.field('cookTime', { type: StringNullableFilter });
    t.field('createdAt', { type: DateTimeFilter });
    t.field('description', { type: StringNullableFilter });
    t.field('headerImageUrl', { type: StringNullableFilter });
    t.field('id', { type: StringFilter });
    t.field('serveCount', { type: StringNullableFilter });
    t.field('text', { type: StringNullableFilter });
    t.field('title', { type: StringFilter });
    t.field('updatedAt', { type: DateTimeFilter });
    t.field('userId', { type: IntFilter });
  },
});
export const RecipeWhereUniqueInput = inputObjectType({
  name: 'RecipeWhereUniqueInput',
  definition(t) {
    t.string('id');
  },
});

export const QueryMode = enumType({
  name: 'QueryMode',
  members: ['default', 'insensitive'],
});
export const SortOrder = enumType({
  name: 'SortOrder',
  members: ['asc', 'desc'],
});
