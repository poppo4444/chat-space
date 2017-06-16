# chat-space1

## users table

|column|type|options|
|--|--|--|
|id|integer||
|name|string|null:false|
|email|string|null:false|
|password|string|null:false,unique:true|

# Association

has_many: :messages
has_many: :members

## messages table

|column|type|options|
|--|--|--|
|body|string|null:false|
|user_id|integer|foreign_key: true|
|times_stamp|datetime|null:false|

# Association

belongs_to: :users

## groups

|column|type|options|
|--|--|--|
|id|string|null:false|
|group_name|string|null:false|

# Association

has_many: :members

## members

|column|type|options|
|--|--|--|
|group_id|integer|foreign_key: true|
|user_id|integer|foreign_key: true|

# Association

belongs_to: :users,groups