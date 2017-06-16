# chat-space1

## user table

|column|type|options|
|--|--|--|
|id|integer||
|name|string|null: false,unique: true,|
|email|string|null:false|
|password|string|null:false|

### Association

has_many :messages
has_many :groups ,through: :users_groups
add_index :users, :name

## message table

|column|type|options|
|--|--|--|
|id|integer||
|body|text||
|image|text||
|user_id|integer|null: false,foreign_key: true|
|times_stamp|datetime|null:false|

### Association

belongs_to :users
belongs_to :groups

## group table

|column|type|options|
|--|--|--|
|id|integer||
|name|string|null:false, unique:true|

### Association

has_many :messages
has_many :users ,through: :users_groups

## users_groups table

|column|type|options|
|--|--|--|
|id|integer||
|group_id|integer|foreign_key: true|
|user_id|integer|foreign_key: true|

### Association

belongs_to :users
belongs_to :groups
